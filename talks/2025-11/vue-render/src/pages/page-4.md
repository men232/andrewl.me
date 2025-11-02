
<style scoped>
  .slidev-layout {
    padding: 0.5rem 1rem;
  }
</style>

<div class="flex flex-col h-full">

# Зачем нужен Virtual DOM

<v-click>

<div class="flex gap-2 flex-1" style="--slidev-code-margin: 0">

````md magic-move{class: 'code-sm2 flex-1'}
```html
<ul id="tasks">
  <li>Task 1</li>
  <li>Task 2</li>
</ul>

<script>
  const ul = document.querySelector("#tasks");

  let tasks = ["Task 1", "Task 2"];

  tasks.push("Task 3");
  tasks.push("Task 4");
  render();
</script>
```

````



```js{all|2,6,17}{class: 'code-sm2', at: 2}
function render() {
  const commonLength = Math.min(tasks.length, ul.children.length);

  // Patch existed element
  for (let idx = 0; idx < commonLength; idx++) {
    const oldText = ul.children[idx].textContent;
    const newText = tasks[idx];

    if (oldText !== newText) {
      ul.children[idx].textContent = newText;
    }
  }

  // Add new element
  if (tasks.length > ul.children.length) {
    tasks
      .slice(ul.children.length)
      .forEach((newText) => {
        const el = document.createElement("li");
        el.textContent = newText;
        ul.appendChild(el);
     });
  }

  // Remove extra children
  if (tasks.length < ul.children.length) {
    ul.children
      .slice(tasks.length)
      .forEach((child) => ul.removeChild(child));
  }
}
```

</div>

</v-click>

</div>
