````md magic-move{class: 'code-lg'}
```js
const state = reactive({ count: 0 })

watchEffect(() => {
  console.log('call effect', state.count)
})

state.count = 1
```

```js
const state = reactive({ count: 0, user: 1 })

watchEffect(() => {
  console.log('call effect', state.count)
})

state.count = 1
```

```js
const state = reactive({ count: 0, user: 1 })

watchEffect(() => {
  console.log('call effect', state.count)
})

state.count = 1
state.user = 5
```
````

````md magic-move{class: 'code-lg'}
```bash
>
```

```bash
> call effect 0
> call effect 1
```
````
