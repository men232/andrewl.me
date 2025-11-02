let activeEffect;

class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = [];
    this.active = true;
  }

  run() {
    if (this.active) {
      this.cleanup();
      const prevEffect = activeEffect;
      activeEffect = this;
      try {
        return this.fn();
      } finally {
        activeEffect = prevEffect;
      }
    }
  }

  cleanup() {
    this.deps.forEach((dep) => {
      dep.subscribers.delete(this);
    });
    this.deps = [];
  }

  stop() {
    this.cleanup();
    this.active = false;
  }
}

class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  track() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
      activeEffect.deps.push(this);
    }
  }

  trigger() {
    const sub = [...this.subscribers];
    sub.forEach((effect) => effect.run());
  }
}

class Ref {
  constructor(value) {
    this.dep = new Dep();
    this._value = value;
  }

  get value() {
    this.dep.track();
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    this.dep.trigger();
  }
}

function ref(value) {
  return new Ref(value);
}

const targetToDeps = new WeakMap();

function resolveDep(target, key) {
  let depsMap = targetToDeps.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetToDeps.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key, receiver) {
      const dep = resolveDep(target, key);
      dep.track();

      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const dep = resolveDep(target, key);
      const result = Reflect.set(target, key, value, receiver);
      dep.trigger();

      return result;
    },
  });
}

class ComputedRef {
  constructor(getter) {
    this.dep = new Dep();
    this.dirty = true;
    this.getter = getter;

    this._effect = new ReactiveEffect(() => {
      this.dirty = true;
      this.dep.trigger();
    });
  }

  get value() {
    this.dep.track();

    if (this.dirty) {
      const prevEffect = activeEffect;
      activeEffect = this._effect;
      try {
        this._value = this.getter();
        this.dirty = false;
      } finally {
        activeEffect = prevEffect;
      }
    }

    return this._value;
  }
}

function computed(getter) {
  return new ComputedRef(getter);
}

function watchEffect(fn) {
  const effect = new ReactiveEffect(fn);
  effect.run();
  return () => effect.stop();
}
