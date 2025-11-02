<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### Draft Component

````md magic-move{class: 'code-sm2'}

```js
function mountComponent(component, container) {
  const componentInstance = { ...component };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;

  watchEffect(() => {
    if (!isMounted) {
      if (typeof componentInstance.setup === "function") {
        const setupResult = componentInstance.setup();

        if (typeof setupResult === "function") {
          renderFn = setupResult;
        }
      }

      const vdom = renderFn();
      mount(vdom, container);
      isMounted = true;
      prevVdom = vdom;
    } else {
      const vdom = renderFn();
      patch(prevVdom, vdom);
      prevVdom = vdom;
    }
  });
}
```

```js
function mountComponent(component, container) {
  const componentInstance = { ...component };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;

  watchEffect(() => {
    if (!isMounted) {
      if (typeof componentInstance.setup === "function") {
        const setupResult = componentInstance.setup();

        if (typeof setupResult === "function") {
          renderFn = setupResult;
        }
      }

      const vdom = renderFn();
      mount(vdom, container);
      isMounted = true;
      prevVdom = vdom;
    } else {
      const vdom = renderFn();
      patch(prevVdom, vdom);
      prevVdom = vdom;
    }
  });
}

function onMounted(hookFn) {
  // magic happens here
}
```

```js{*|31}
function mountComponent(component, container) {
  const componentInstance = { ...component };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;

  watchEffect(() => {
    if (!isMounted) {
      if (typeof componentInstance.setup === "function") {
        const setupResult = componentInstance.setup();

        if (typeof setupResult === "function") {
          renderFn = setupResult;
        }
      }

      const vdom = renderFn();
      mount(vdom, container);
      isMounted = true;
      prevVdom = vdom;
    } else {
      const vdom = renderFn();
      patch(prevVdom, vdom);
      prevVdom = vdom;
    }
  });
}

function onMounted(hookFn) {
  currentComponent.onMounted.push(hookFn);
}
```


```js
let currentComponent;

function mountComponent(component, container) {
  const componentInstance = { ...component };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;

  watchEffect(() => {
    if (!isMounted) {
      if (typeof componentInstance.setup === "function") {
        const setupResult = componentInstance.setup();

        if (typeof setupResult === "function") {
          renderFn = setupResult;
        }
      }

      const vdom = renderFn();
      mount(vdom, container);
      isMounted = true;
      prevVdom = vdom;
    } else {
      const vdom = renderFn();
      patch(prevVdom, vdom);
      prevVdom = vdom;
    }
  });
}

function onMounted(hookFn) {
  currentComponent.onMounted.push(hookFn);
}
```

```js
let currentComponent;

function mountComponent(component, container) {
  const componentInstance = { ...component };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;

  watchEffect(() => {
    if (!isMounted) {
      if (typeof componentInstance.setup === "function") {
        currentComponent = componentInstance;
        const setupResult = componentInstance.setup();
        currentComponent = null;

        if (typeof setupResult === "function") {
          renderFn = setupResult;
        }
      }

      const vdom = renderFn();
      mount(vdom, container);
      isMounted = true;
      prevVdom = vdom;
    } else {
      const vdom = renderFn();
      patch(prevVdom, vdom);
      prevVdom = vdom;
    }
  });
}

function onMounted(hookFn) {
  currentComponent.onMounted.push(hookFn);
}
```

```js
let currentComponent;

function mountComponent(component, container) {
  const componentInstance = { ...component, onMounted: [] };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;

  watchEffect(() => {
    if (!isMounted) {
      if (typeof componentInstance.setup === "function") {
        currentComponent = componentInstance;
        const setupResult = componentInstance.setup();
        currentComponent = null;

        if (typeof setupResult === "function") {
          renderFn = setupResult;
        }
      }

      const vdom = renderFn();
      mount(vdom, container);
      isMounted = true;
      prevVdom = vdom;
    } else {
      const vdom = renderFn();
      patch(prevVdom, vdom);
      prevVdom = vdom;
    }
  });
}

function onMounted(hookFn) {
  currentComponent.onMounted.push(hookFn);
}
```

```js
let currentComponent;

function mountComponent(component, container) {
  const componentInstance = { ...component, onMounted: [] };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;

  watchEffect(() => {
    if (!isMounted) {
      if (typeof componentInstance.setup === "function") {
        currentComponent = componentInstance;
        const setupResult = componentInstance.setup();
        currentComponent = null;

        if (typeof setupResult === "function") {
          renderFn = setupResult;
        }
      }

      const vdom = renderFn();
      mount(vdom, container);
      isMounted = true;
      prevVdom = vdom;
      componentInstance.onMounted.forEach((fn) => fn());
    } else {
      const vdom = renderFn();
      patch(prevVdom, vdom);
      prevVdom = vdom;
    }
  });
}

function onMounted(hookFn) {
  currentComponent.onMounted.push(hookFn);
}
```

````
