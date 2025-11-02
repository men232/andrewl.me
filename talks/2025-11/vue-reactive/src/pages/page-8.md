---
layout: two-cols
---

<style scoped>
  .slidev-layout {
    padding: 0.5rem;
    gap: 0.5rem;
    --slidev-code-margin: 0;
  }
</style>

<div class="flex flex-col h-full gap-1">

<div class="flex-1">

````md magic-move{class: 'code-sm2'}
```js{hide}
const dep = new Dep()

watchEffect(() => {
  dep.track()
  console.log('call effect')
})

dep.trigger()
```

```js
const count = new Ref(0);

watchEffect(() => {
  console.log('call effect', count.value);
});

count.value = 1;
```
````

</div>

<div class="grow-0">

````md magic-move
```bash
>
```

```bash
> call effect 0
> call effect 1
```
````

</div>

</div>

::right::

````md magic-move{class: 'code-sm2 h-full'}
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
