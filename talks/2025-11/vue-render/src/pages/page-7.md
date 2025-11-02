<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### Draft Render Function

````md magic-move{class: 'code-lg'}
```html
<div id="app"></div>

<script src="./scripts/render.js"></script>
<script>
  const vdom = h("ul", null, [
    h("li", null, "Task 1"),
    h("li", null, "Task 2"),
    h("li", { style: "color: red;" }, "Task 3"),
  ]);

  mount(vdom, document.querySelector("#app"));
</script>
```

```html
<div id="app">
  <ul>
    <li>Task 1</li>
    <li>Task 2</li>
    <li style="color: red;">Task 3</li>
  </ul>
</div>

<script src="./scripts/render.js"></script>
<script>
  const vdom = h("ul", null, [
    h("li", null, "Task 1"),
    h("li", null, "Task 2"),
    h("li", { style: "color: red;" }, "Task 3"),
  ]);

  mount(vdom, document.querySelector("#app"));
</script>
```
````
