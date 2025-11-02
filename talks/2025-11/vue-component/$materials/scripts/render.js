function h(tag, props, children) {
  if (arguments.length === 2) {
    children = props;
    props = null;
  }
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

// Update existing DOM node
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

  // Remove old props
  for (const key in oldProps) {
    if (!(key in newProps)) {
      el.removeAttribute(key);
    }
  }

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
