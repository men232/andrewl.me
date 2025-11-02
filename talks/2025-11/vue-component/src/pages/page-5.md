<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### App Demo

````md magic-move
```html{*|7-19|8-10|16-19}
<div id="app"></div>

<script src="./scripts/mini-vue.js"></script>

<script>
  const App = {
    setup() {
      const state = reactive({
        count: 0,
      });

      const onClick = () => {
        state.count++;
      };

      return () => {
        return h("div", null, [
          h("button", { onClick }, "Clicks: " + state.count)
        ]);
      };
    },
  };

  mountComponent(App, document.querySelector("#app"));
</script>
```

```vue
<script setup>
const state = reactive({
  count: 0,
});

const onClick = () => {
  state.count++;
};
</script>

<template>
  <button @click="onClick">Clicks: {{ state.count }}</button>
</template>
```

```html
<div id="app"></div>

<script src="./scripts/mini-vue.js"></script>

<script>
  const App = {
    setup() {
      const state = reactive({
        count: 0,
      });

      const onClick = () => {
        state.count++;
      };

      return () => {
        return h("div", null, [
          h("button", { onClick }, "Clicks: " + state.count)
        ]);
      };
    },
  };

  mountComponent(App, document.querySelector("#app"));
</script>
```

```html
<div id="app">
  <button>Clicks: 0</button>
</div>

<script src="./scripts/mini-vue.js"></script>

<script>
  const App = {
    setup() {
      const state = reactive({
        count: 0,
      });

      const onClick = () => {
        state.count++;
      };

      return () => {
        return h("div", null, [
          h("button", { onClick }, "Clicks: " + state.count)
        ]);
      };
    },
  };

  mountComponent(App, document.querySelector("#app"));
</script>
```

```html
<div id="app">
  <button>Clicks: 1</button>
</div>

<script src="./scripts/mini-vue.js"></script>

<script>
  const App = {
    setup() {
      const state = reactive({
        count: 0,
      });

      const onClick = () => {
        state.count++;
      };

      return () => {
        return h("div", null, [
          h("button", { onClick }, "Clicks: " + state.count)
        ]);
      };
    },
  };

  mountComponent(App, document.querySelector("#app"));
</script>
```

```html
<div id="app">
  <button>Clicks: 2</button>
</div>

<script src="./scripts/mini-vue.js"></script>

<script>
  const App = {
    setup() {
      const state = reactive({
        count: 0,
      });

      const onClick = () => {
        state.count++;
      };

      return () => {
        return h("div", null, [
          h("button", { onClick }, "Clicks: " + state.count)
        ]);
      };
    },
  };

  mountComponent(App, document.querySelector("#app"));
</script>
```

````
