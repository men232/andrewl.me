<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### Draft Render Function

````md magic-move{class: 'code-sm2'}
```js
function patch(oldNode, newNode) {
  // make changes
}
```

```js
function patch(oldNode, newNode) {
  const el = (newNode.el = oldNode.el);
}
```

```js
function patch(oldNode, newNode) {
  if (oldNode.tag !== newNode.tag) {
    const parent = oldNode.el.parentNode;
    mount(newNode, parent);
    parent.removeChild(oldNode.el);
    return;
  }

  const el = (newNode.el = oldNode.el);
}
```

```js
function patch(oldNode, newNode) {
  if (oldNode.tag !== newNode.tag) {
    const parent = oldNode.el.parentNode;
    mount(newNode, parent);
    parent.removeChild(oldNode.el);
    return;
  }

  const el = (newNode.el = oldNode.el);
  const oldProps = oldNode.props || {};
  const newProps = newNode.props || {};

  // Update props
  for (const key in newProps) {
    if (newProps[key] !== oldProps[key]) {
      if (key.startsWith('on')) {
        const event = key.slice(2).toLowerCase();
        el.removeEventListener(event, oldProps[key]);
        el.addEventListener(event, newProps[key]);
      } else {
        el.setAttribute(key, newProps[key]);
      }
    }
  }
}
```

```js{16}
function patch(oldNode, newNode) {
  if (oldNode.tag !== newNode.tag) {
    const parent = oldNode.el.parentNode;
    mount(newNode, parent);
    parent.removeChild(oldNode.el);
    return;
  }

  const el = (newNode.el = oldNode.el);
  const oldProps = oldNode.props || {};
  const newProps = newNode.props || {};

  // Update props
  for (const key in newProps) {
    if (newProps[key] !== oldProps[key]) {
      if (key.startsWith("on")) {
        const event = key.slice(2).toLowerCase();
        el.removeEventListener(event, oldProps[key]);
        el.addEventListener(event, newProps[key]);
      } else {
        el.setAttribute(key, newProps[key]);
      }
    }
  }
}
```

```js
function patch(oldNode, newNode) {
  if (oldNode.tag !== newNode.tag) {
    const parent = oldNode.el.parentNode;
    mount(newNode, parent);
    parent.removeChild(oldNode.el);
    return;
  }

  const el = (newNode.el = oldNode.el);
  const oldProps = oldNode.props || {};
  const newProps = newNode.props || {};

  // Update props
  for (const key in newProps) {
    if (newProps[key] !== oldProps[key]) {
      if (key.startsWith('on')) {
        const event = key.slice(2).toLowerCase();
        el.removeEventListener(event, oldProps[key]);
        el.addEventListener(event, newProps[key]);
      } else {
        el.setAttribute(key, newProps[key]);
      }
    }
  }

  // Remove old props
  for (const key in oldProps) {
    if (!(key in newProps)) {
      el.removeAttribute(key);
    }
  }
}
```

```js
function patch(oldNode, newNode) {
  if (oldNode.tag !== newNode.tag) {
    const parent = oldNode.el.parentNode;
    mount(newNode, parent);
    parent.removeChild(oldNode.el);
    return;
  }

  const el = (newNode.el = oldNode.el);
  patchProps(oldNode, newNode);

  // Update children
}
```

```js
function patch(oldNode, newNode) {
  if (oldNode.tag !== newNode.tag) {
    const parent = oldNode.el.parentNode;
    mount(newNode, parent);
    parent.removeChild(oldNode.el);
    return;
  }

  const el = (newNode.el = oldNode.el);
  patchProps(oldNode, newNode);

  // Update children
  const oldChildren = oldNode.children;
  const newChildren = newNode.children;

  if (typeof newChildren === 'string') {
    el.textContent = newChildren;
  }
}
```

```js
function patch(oldNode, newNode) {
  if (oldNode.tag !== newNode.tag) {
    const parent = oldNode.el.parentNode;
    mount(newNode, parent);
    parent.removeChild(oldNode.el);
    return;
  }

  const el = (newNode.el = oldNode.el);
  patchProps(oldNode, newNode);

  // Update children
  const oldChildren = oldNode.children;
  const newChildren = newNode.children;

  if (typeof newChildren === 'string') {
    el.textContent = newChildren;
  } else if (typeof oldChildren === 'string') {
    el.textContent = '';
    newChildren.forEach((child) => mount(child, el));
  }
}
```

```js
function patch(oldNode, newNode) {
  if (oldNode.tag !== newNode.tag) {
    const parent = oldNode.el.parentNode;
    mount(newNode, parent);
    parent.removeChild(oldNode.el);
    return;
  }

  const el = (newNode.el = oldNode.el);
  patchProps(oldNode, newNode);

  // Update children
  const oldChildren = oldNode.children;
  const newChildren = newNode.children;

  if (typeof newChildren === 'string') {
    el.textContent = newChildren;
  } else if (typeof oldChildren === 'string') {
    el.textContent = '';
    newChildren.forEach((child) => mount(child, el));
  } else {
    // oldChildren[]
    // newChildren[]
  }
}
```
````
