let currentComponent;

function onMounted(hookFn) {
  if (!currentComponent) {
    throw new Error("onMount must be used inside setup function.");
  }

  let hooks = currentComponent.hooks.mounted;

  if (!hooks) {
    hooks = new Set();
    currentComponent.hooks.mounted = hooks;
  }

  hooks.add(hookFn);
}

function triggerHook(component, hookType) {
  const hooks = component.hooks[hookType];

  if (hooks) {
    hooks.forEach((fn) => fn());
  }
}

function mountComponent(component, container) {
  const componentInstance = { ...component, hooks: {} };

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
      triggerHook(componentInstance, "mounted");
    } else {
      const vdom = renderFn();
      patch(prevVdom, vdom);
      prevVdom = vdom;
    }
  });
}
