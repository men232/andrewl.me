# Что такое SFC?

<v-click>
<span class="text-primary font-bold">S</span>ingle <span class="text-primary font-bold">F</span>ile <span class="text-primary font-bold">C</span>component
</v-click>

<v-click>

`@/App.vue`

`@/components/TheButton.vue`

`@/pages/LoginPage.vue`

</v-click>

<v-click>

````md magic-move
```vue
<script setup>
const message = 'Привет, Vue 3!'
</script>

<template>
  <div class="greeting">{{ message }}</div>
</template>

<style>
.greeting {
  color: magenta;
}
</style>
```

```vue
<script setup>
import '@/styles/HelloWorld.css';

const message = 'Привет, Vue 3!'
</script>

<template>
  <div class="greeting">{{ message }}</div>
</template>
```

```vue{*|1}
<script setup>
import '@/styles/HelloWorld.css';
import { useGreeting } from '@/composables/useGreeting';

const { message } = useGreeting();
</script>

<template>
  <div class="greeting">{{ message }}</div>
</template>
```

```ts{5-8}
import '@/styles/HelloWorld.css';
import { useGreeting } from '@/composables/useGreeting';

export default {
  setup() {
    const { message } = useGreeting();
    return { message };
  },
  render() {
    return '<div class="greeting">{{ message }}</div>'
  }
}
```

````

</v-click>
