<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

###### Draft Render Function

````md magic-move{class: 'code-sm2'}
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

  if (typeof newChildren === "string") {
    el.textContent = newChildren;
  } else if (typeof oldChildren === "string") {
    el.textContent = "";
    newChildren.forEach((child) => mount(child, el));
  } else {
    // oldChildren[]
    // newChildren[]
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

  if (typeof newChildren === "string") {
    el.textContent = newChildren;
  } else if (typeof oldChildren === "string") {
    el.textContent = "";
    newChildren.forEach((child) => mount(child, el));
  } else {
    // Patch common children
    const minLength = Math.min(oldChildren.length, newChildren.length);
    for (let i = 0; i < minLength; i++) {
      patch(oldChildren[i], newChildren[i]);
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
  const oldChildren = oldNode.children;
  const newChildren = newNode.children;

  if (typeof newChildren === "string") {
    el.textContent = newChildren;
  } else if (typeof oldChildren === "string") {
    el.textContent = "";
    newChildren.forEach((child) => mount(child, el));
  } else {
    // Patch common children
    const minLength = Math.min(oldChildren.length, newChildren.length);
    for (let i = 0; i < minLength; i++) {
      patch(oldChildren[i], newChildren[i]);
    }

    // Add new children
    if (newChildren.length > oldChildren.length) {
      newChildren.slice(oldChildren.length).forEach((child) => mount(child, el));
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
  const oldChildren = oldNode.children;
  const newChildren = newNode.children;

  if (typeof newChildren === "string") {
    el.textContent = newChildren;
  } else if (typeof oldChildren === "string") {
    el.textContent = "";
    newChildren.forEach((child) => mount(child, el));
  } else {
    // Patch common children
    const minLength = Math.min(oldChildren.length, newChildren.length);
    for (let i = 0; i < minLength; i++) {
      patch(oldChildren[i], newChildren[i]);
    }

    // Add new children
    if (newChildren.length > oldChildren.length) {
      newChildren.slice(oldChildren.length).forEach((child) => mount(child, el));
    }

    // Remove extra children
    if (newChildren.length < oldChildren.length) {
      oldChildren.slice(newChildren.length).forEach((child) => el.removeChild(child.el));
    }
  }
}
```

```js{35}
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

  if (typeof newChildren === "string") {
    el.textContent = newChildren;
  } else if (typeof oldChildren === "string") {
    el.textContent = "";
    newChildren.forEach((child) => mount(child, el));
  } else {
    // Patch common children
    const minLength = Math.min(oldChildren.length, newChildren.length);
    for (let i = 0; i < minLength; i++) {
      patch(oldChildren[i], newChildren[i]);
    }

    // Add new children
    if (newChildren.length > oldChildren.length) {
      newChildren.slice(oldChildren.length).forEach((child) => mount(child, el));
    }

    // Remove extra children
    if (newChildren.length < oldChildren.length) {
      oldChildren.slice(newChildren.length).forEach((child) => el.removeChild(child.el));
    }
  }
}
```
````
