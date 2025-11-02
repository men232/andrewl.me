<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### App Demo

````md magic-move
```html
<script>
  const App = {
    setup() {
      const state = reactive({ count: 0 });

      const onClick = () => {
        state.count++;
      };

      return () => {
        return h("div", null, [h("button", { onClick }, "Clicks: " + state.count)]);
      };
    },
  };

  mountComponent(App, document.querySelector("#app"));
</script>
```

```html
<div id="app"></div>

<script>
  const App = {
    setup() {
      const state = reactive({ count: 0 });

      const onClick = () => {
        state.count++;
      };

      onMounted(() => {
        console.log("Я родился!!!");
      });

      return () => {
        console.log("render!");
        return h("div", null, [h("button", { onClick }, "Clicks: " + state.count)]);
      };
    },
  };

  mountComponent(App, document.querySelector("#app"));
</script>
```
````

````md magic-move
```bash
>
>
```

```bash
> 'render!'
> 'Я родился!!!'
```
````
