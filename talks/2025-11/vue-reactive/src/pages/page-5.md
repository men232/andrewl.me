<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### Draft Reactivity

````md magic-move{class: 'code-sm2'}
```js
function watchEffect(fn) {}

watchEffect(() => {
  console.log('call effect');
});
```

```js
class Dep {
  // Magic happens gere
}

function watchEffect(fn) {}

watchEffect(() => {
  console.log('call effect');
});
```

```js
class Dep {
  // Подписывает текущий эффект
  track() {}

  // Уведомляет всех подписчиков
  trigger() {}
}

function watchEffect(fn) {}

watchEffect(() => {
  console.log('call effect');
});
```

```js
class Dep {
  subscribers = new Set();

  // Подписывает текущий эффект
  track() {}

  // Уведомляет всех подписчиков
  trigger() {
    this.subscribers.forEach((fn) => fn());
  }
}

function watchEffect(fn) {}

watchEffect(() => {
  console.log('call effect');
});
```

```js {*|22|22,2}
class Dep {
  subscribers = new Set();

  // Подписывает текущий эффект
  track() {}

  // Уведомляет всех подписчиков
  trigger() {
    this.subscribers.forEach((fn) => fn());
  }
}

function watchEffect(fn) {}

const dep = new Dep();

watchEffect(() => {
  dep.track();
  console.log('call effect');
});

dep.trigger();
```

```js
let activeEffect;

class Dep {
  subscribers = new Set();

  // Подписывает текущий эффект
  track() {}

  // Уведомляет всех подписчиков
  trigger() {
    this.subscribers.forEach((fn) => fn());
  }
}

function watchEffect(fn) {}

const dep = new Dep();

watchEffect(() => {
  dep.track();
  console.log('call effect');
});

dep.trigger();
```

```js
let activeEffect;

class Dep {
  subscribers = new Set();

  // Подписывает текущий эффект
  track() {}

  // Уведомляет всех подписчиков
  trigger() {
    this.subscribers.forEach((fn) => fn());
  }
}

function watchEffect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

const dep = new Dep();

watchEffect(() => {
  dep.track();
  console.log('call effect');
});

dep.trigger();
```

```js{*|*|21|21,32}
let activeEffect;

class Dep {
  subscribers = new Set();

  // Подписывает текущий эффект
  track() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  // Уведомляет всех подписчиков
  trigger() {
    this.subscribers.forEach((fn) => fn());
  }
}

function watchEffect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

const dep = new Dep();

watchEffect(() => {
  dep.track();
  console.log('call effect');
});

dep.trigger();
```
````

<div v-if="$clicks > 9">

```bash
> call effect
> call effect
```

</div>
