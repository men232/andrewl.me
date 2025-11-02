````md magic-move{class: 'code-lg'}
```js
const count = new Ref(0)

watchEffect(() => {
  console.log('call effect', count.value)
})

count.value = 1
```

```js
const state = reactive({ count: 0 })

watchEffect(() => {
  console.log('call effect', state.count)
})

state.count = 1
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
