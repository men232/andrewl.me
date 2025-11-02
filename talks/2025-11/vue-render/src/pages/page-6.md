<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### Draft Render Function

````md magic-move{class: 'code-sm2'}

```js
function h(tag, props, children) {
  // create virtual dom
}

function mount(vnode, container) {
  // mount code
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  // mount code
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  // Set props
  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  // Set props
  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js{11}
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  // Set props
  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  // Set props
  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }

  // Handle children
  if (vnode.children) {

  }
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  // Set props
  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }

  // Handle children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    }
  }
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  // Set props
  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }

  // Handle children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach((child) => mount(child, el));
    }
  }
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  // Set props
  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }

  // Handle children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach((child) => mount(child, el));
    } else {
      mount(vnode.children, el);
    }
  }
}

function patch(oldNode, newNode) {
  // make changes
}
```

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  // Set props
  if (vnode.props) {
    for (const key in vnode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }

  // Handle children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach((child) => mount(child, el));
    } else {
      mount(vnode.children, el);
    }
  }

  container.appendChild(el);
  vnode.el = el;
}

function patch(oldNode, newNode) {
  // make changes
}
```

````
