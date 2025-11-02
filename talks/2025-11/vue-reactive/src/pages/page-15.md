````md magic-move{class: 'code-lg'}
```html
<div>
  <button>Clicks: 0</button>
</div>

<script></script>
```

```html
<div>
  <button>Clicks: 0</button>
</div>

<script>
  const state = reactive({ count: 0 });
</script>
```

```html
<div>
  <button>Clicks: 0</button>
</div>

<script>
  const state = reactive({ count: 0 });
  const btn = document.querySelector('button');
</script>
```

```html
<div>
  <button>Clicks: 0</button>
</div>

<script>
  const state = reactive({ count: 0 });
  const btn = document.querySelector('button');

  watchEffect(() => {
    btn.textContent = `Clicks: ${state.count}`;
  });
</script>
```

```html
<div>
  <button>Clicks: 0</button>
</div>

<script>
  const state = reactive({ count: 0 });
  const btn = document.querySelector('button');

  watchEffect(() => {
    btn.textContent = `Clicks: ${state.count}`;
  });

  btn.addEventListener('click', () => {
    state.count++;
  });
</script>
```

```html
<div>
  <button>Clicks: 1</button>
</div>

<script>
  const state = reactive({ count: 0 });
  const btn = document.querySelector('button');

  watchEffect(() => {
    btn.textContent = `Clicks: ${state.count}`;
  });

  btn.addEventListener('click', () => {
    state.count++;
  });
</script>
```

```html
<div>
  <button>Clicks: 2</button>
</div>

<script>
  const state = reactive({ count: 0 });
  const btn = document.querySelector('button');

  watchEffect(() => {
    btn.textContent = `Clicks: ${state.count}`;
  });

  btn.addEventListener('click', () => {
    state.count++;
  });
</script>
```
````

<div class="pt-4">

<TheRipple :at="[5, 6]">
  <button class="bg-indigo-700 px-4 py-2 rounded-lg" v-if="$clicks < 5">Clicks: 0</button>
  <button class="bg-indigo-700 px-4 py-2 rounded-lg" v-else-if="$clicks < 6">Clicks: 1</button>
  <button class="bg-indigo-700 px-4 py-2 rounded-lg" v-else>Clicks: 2</button>
</TheRipple>

</div>
