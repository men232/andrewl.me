<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

<div grid="~ cols-[3fr_2fr] gap-2" style="height: 100%">

````md magic-move{class: 'code-lg'}
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
  const vdom = h('ul', null, [
    h('li', null, 'Task 1'),
    h('li', null, 'Task 2'),
    h('li', { style: 'color: red;' }, 'Task 3'),
  ]);

  mount(vdom, document.querySelector('#app'));
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
  const vdom = h('ul', null, [
    h('li', null, 'Task 1'),
    h('li', null, 'Task 2'),
    h('li', { style: 'color: red;' }, 'Task 3'),
  ]);

  mount(vdom, document.querySelector('#app'));

  const vdomNew = h('ul', null, [
    h('li', null, 'Task 1'),
    h('li', null, 'Task 2'),
    h('li', { style: 'color: blue;' }, 'Task 3'),
  ]);

  patch(vdom, vdomNew);
</script>
```

```html
<div id="app">
  <ul>
    <li>Task 1</li>
    <li>Task 2</li>
    <li style="color: blue;">Task 3</li>
  </ul>
</div>

<script src="./scripts/render.js"></script>
<script>
  const vdom = h('ul', null, [
    h('li', null, 'Task 1'),
    h('li', null, 'Task 2'),
    h('li', { style: 'color: red;' }, 'Task 3'),
  ]);

  mount(vdom, document.querySelector('#app'));

  const vdomNew = h('ul', null, [
    h('li', null, 'Task 1'),
    h('li', null, 'Task 2'),
    h('li', { style: 'color: blue;' }, 'Task 3'),
  ]);

  patch(vdom, vdomNew);
</script>
```
````

<div class="slidev-code-wrapper slidev-code">
  <ul class="font-sans text-lg">
    <li>Task 1</li>
    <li>Task 2</li>
    <li :style="{ color: $clicks > 1 ? 'blue' : 'red' }">Task 3</li>
  </ul>
</div>

</div>
