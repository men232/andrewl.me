<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### Draft Component

````md magic-move{class: 'code-sm2'}
```js
function mountComponent(component, container) {
  // magic happens gere
}
```

```js
function mountComponent(component, container) {
  const componentInstance = { ...component };
}
```

```js
function mountComponent(component, container) {
  const componentInstance = { ...component };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;
}
```

```js
function mountComponent(component, container) {
  const componentInstance = { ...component };

  let isMounted = false;
  let prevVdom;
  let renderFn = component.render;
  
  watchEffect(() => {

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
        componentInstance.setup();
      }
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
```
````
