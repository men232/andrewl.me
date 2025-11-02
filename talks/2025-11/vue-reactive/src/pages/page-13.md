<style scoped>
  .slidev-layout {
    padding: 0.5rem;
  }
</style>

````md magic-move{class: 'code-sm2'}
```js
const targetToDeps = new WeakMap()

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      let dep = targetToDeps.get(target)
      if (!dep) {
        dep = new Dep()
        targetToDeps.set(target, dep)
      }

      dep.track()
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      let dep = targetToDeps.get(target)
      if (!dep) {
        dep = new Dep()
        targetToDeps.set(target, dep)
      }

      dep.trigger()
      return true
    },
  })
}
```

```js{6-10,17-21}
const targetToDeps = new WeakMap()

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      let dep = targetToDeps.get(target)
      if (!dep) {
        dep = new Dep()
        targetToDeps.set(target, dep)
      }

      dep.track()
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      let dep = targetToDeps.get(target)
      if (!dep) {
        dep = new Dep()
        targetToDeps.set(target, dep)
      }

      dep.trigger()
      return true
    },
  })
}
```

```js
const targetToDeps = new WeakMap()

function getDep(target) {
  let dep = targetToDeps.get(target)
  if (!dep) {
    dep = new Dep()
    targetToDeps.set(target, dep)
  }
  return dep;
}

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      getDep(target).track()
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      getDep(target).trigger()
      return true
    },
  })
}
```

```js{15}
const targetToDeps = new WeakMap()

function getDep(target) {
  let dep = targetToDeps.get(target)
  if (!dep) {
    dep = new Dep()
    targetToDeps.set(target, dep)
  }
  return dep;
}

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      getDep(target).track()
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      getDep(target).trigger()
      return true
    },
  })
}
```

```js{15}
const targetToDeps = new WeakMap()

function getDep(target) {
  let dep = targetToDeps.get(target)
  if (!dep) {
    dep = new Dep()
    targetToDeps.set(target, dep)
  }
  return dep;
}

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      getDep(target).track() // state.count
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      getDep(target).trigger()
      return true
    },
  })
}
```

```js{15}
const targetToDeps = new WeakMap()

function getDep(target) {
  let dep = targetToDeps.get(target)
  if (!dep) {
    dep = new Dep()
    targetToDeps.set(target, dep)
  }
  return dep;
}

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      getDep(target).track() // state.count // { count: 1, user: 5 }
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      getDep(target).trigger()
      return true
    },
  })
}
```

```js{10-16}
const targetToDeps = new WeakMap()

function getDep(target, key) {
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
    get(target, key) {
      getDep(target, key).track()
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      getDep(target, key).trigger()
      return true
    },
  })
}
```

```js
const targetToDeps = new WeakMap()

function getDep(target, key) {
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
      getDep(target, key).track()
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      getDep(target, key).trigger()
      return result
    },
  })
}
```
````
