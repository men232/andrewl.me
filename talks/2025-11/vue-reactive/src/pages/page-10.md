<style scoped>
  .slidev-layout {
    padding: 1rem;
  }
</style>

````md magic-move

```js
function reactive(raw) {

}
```

```js
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {

    },
    set(target, key, value) {

    },
  })
}
```

```js
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      dep.track()
    },
    set(target, key, value) {
      dep.trigger()
    },
  })
}
```

```js
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = // ?
      dep.track()
    },
    set(target, key, value) {
      dep.trigger()
    },
  })
}
```

```js
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      target.__dep = new Dep() // ?
      dep.track()
    },
    set(target, key, value) {
      dep.trigger()
    },
  })
}
```

```js
const targetToDeps = new WeakMap()

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = // ?
      dep.track()
    },
    set(target, key, value) {
      dep.trigger()
    },
  })
}
```

```js
const targetToDeps = new WeakMap() // { [obj_1]: Dep, [obj_2]: Dep, ... }

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = // ?
      dep.track()
    },
    set(target, key, value) {
      dep.trigger()
    },
  })
}
```

```js
const targetToDeps = new WeakMap()

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      let dep = targetToDeps.get(target)

      dep.track()
    },
    set(target, key, value) {
      dep.trigger()
    },
  })
}
```

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
    },
    set(target, key, value) {
      dep.trigger()
    },
  })
}
```

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
    },
    set(target, key, value) {
      let dep = targetToDeps.get(target)
      if (!dep) {
        dep = new Dep()
        targetToDeps.set(target, dep)
      }

      dep.trigger()
    },
  })
}
```

```js{*|13,16,24}
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

````
