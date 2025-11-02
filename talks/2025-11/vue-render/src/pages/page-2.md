<div class="flex flex-row gap-2">

<div class="flex-1">

```vue{*}{class: 'code-lg'}
<template>
  <div class="text-center">
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
const message = 'Привет, Vue 3!'
</script>
```
</div>

<div v-click="1" class="flex-1">

```js{*|*|1,3}{class:'code-lg'}
const message = "Привет, Vue 3!";

const _hoisted_1 = { class: "text-center" };

function render() {
  return h("div", _hoisted_1, [
    h("h1", null, _toDisplayString(message))
  ]);
}
```

</div>

</div>

<div class="pt-16" v-click="1">

```mermaid {theme: 'dark', look: 'handDrawn'}
flowchart LR
  %% Nodes
  A[Template]:::tpl
  B[Render Function]:::render
  C[Virtual DOM]:::vdom
  D[Actual DOM]:::dom
  E[component<br/>reactive<br/>state]:::state

  %% Main linear flow (dashed arrows to match original)
  A -->|compiled into| B
  B -->|returns| C
  C -->|mount / patch| D

  %% Reactive loop (dashed circular flow)
  B -.->|track| E
  E -.->|trigger| B

  %% Styling / spacing (helps make it look closer to the original)
  classDef tpl fill:#114B29,stroke:#1f6f4a,stroke-width:1px,color:#ffffff;
  classDef render fill:#573E05,stroke:#a98b2e,stroke-width:1px,color:#ffffff;
  classDef vdom fill:#5222A0,stroke:#5b3a9a,stroke-width:1px,color:#ffffff;
  classDef dom fill:#004080,stroke:#2e6fb0,stroke-width:1px,color:#ffffff;
  classDef state fill:#8A0000,stroke:#a93b3b,stroke-width:1px,color:#ffffff;
```

</div>
