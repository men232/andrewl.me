---
layout: center
---


<div v-click.hide="3">

А что если мы расширим эту идею?

</div>


````md magic-move{class: 'code-lg w-180'}
```html
<div id="b">30</div>

<script>
  document
    .querySelector("#b")
    .textContent = state.a * 10
</script>
```

```html
<div id="b">30</div>

<script>
  onStateChanged(() => {
    document
      .querySelector('#b')
      .textContent = state.a * 10
  })
</script>
```

```js {1}
onStateChanged(() => {
  render(state)
})
```
````
