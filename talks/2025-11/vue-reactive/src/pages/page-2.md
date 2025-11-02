---
layout: center
---

# Что означает реактивность?

Реактивность - это механизм, реакции на изменения состояния.

<div class="max-w-96" v-click="1">

Представим простую ситуацию:

````md magic-move{class: 'code-lg'}
```

```

```js
let a = 3
let b = a * 10
```

```js
let a = 3
let b = a * 10

console.log(b) // 30
```

```js
let a = 3
let b = a * 10

console.log(b) // 30
a = 4
```

```js
let a = 3
let b = a * 10

console.log(b) // 30
a = 4
console.log(b) // 30
```

```js
let a = 3
let b = a * 10

console.log(b) // 30
a = 4
b = a * 10
console.log(b) // 40
```

```js
let a = 3
let b = a * 10

onStateChanged(() => {
  b = a * 10
})

a = 4
console.log(b) // 40
```
````

</div>

<div v-click="[5, 6]">

Если потом `a` изменится, `b` не обновится автоматически. Чтобы синхронизировать их без ручных присваиваний нужна **реактивность**.

</div>
