# Lifecycle Hooks

<v-click>

- onMounted
- onUpdated
- onUnmounted
- onBeforeMount
- onBeforeUpdate
- onBeforeUnmount
- onDeactivated
- ...

</v-click>

<v-click>

```vue{*|2-4}
<script setup>
onMounted(() => {
  console.log('Я родился!!!');
})
</script>

<template>
  🥚
</template>
```

</v-click>
