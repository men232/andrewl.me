---
layout: two-cols
transition: view-transition
---

<style scoped>
  .slidev-layout {
    padding: 0.5rem;
    gap: 0.5rem;
    --slidev-code-margin: 0;
  }
</style>

````md magic-move{class: 'code-sm2'}
```js{*|4,8|hide|hide}
const dep = new Dep()

watchEffect(() => {
  dep.track()
  console.log('call effect')
})

dep.trigger()
```
````

::right::

````md magic-move{class: 'code-sm2', at:2}
```js
let activeEffect;

class Dep {
  subscribers = new Set();

  track() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  trigger() {
    this.subscribers.forEach((fn) => fn());
  }
}

function watchEffect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}
```

```js{23-28}
let activeEffect;

class Dep {
  subscribers = new Set()

  track() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  trigger() {
    this.subscribers.forEach((fn) => fn())
  }
}

function watchEffect(fn) {
  activeEffect = fn
  fn()
  activeEffect = null
}

class Ref {
  constructor(value) {
    this.dep = new Dep()
    this._value = value
  }
}
```

```js
let activeEffect;

class Dep {
  subscribers = new Set();

  track() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  trigger() {
    this.subscribers.forEach((fn) => fn());
  }
}

function watchEffect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
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
```
````
