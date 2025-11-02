---
layout: quote
---

```js {*|3|8}{class: 'code-lg'}
let updateFn, currentState
const onStateChanged = (callback) => {
	updateFn = callback
}

const setState = (newState) => {
	currentState = newState
	updateFn()
}
```



<div class="py-4" v-click="3">

### React?



```js{all}{class: 'code-lg'}
onStateChanged(() => {
  render()
})

setState(a * 10)
```

</div>
