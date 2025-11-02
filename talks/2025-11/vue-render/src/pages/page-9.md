<style scoped>
  .slidev-layout {
    padding: 0 0.5rem;
  }
</style>

````md magic-move{class: 'code-lg'}
```vue
<template>
  <li v-for="item in items">
    {{ item.msg }}
  </li>
</template>

<script setup>

const items = ref([
  { msg: 'Foo' },
  { msg: 'Bar' }
])

</script>
```

```vue
<template>
  <li v-for="item in items" :key="item.id">
    {{ item.msg }}
  </li>
</template>

<script setup>

const items = ref([
  { msg: 'Foo', id: 'msg-1' },
  { msg: 'Bar', id: 'mg-2' }
])

</script>
```

```vue
<template>
  <li v-for="item in items" :key="item.id">
    <label>{{ item.msg }}</label>
    <input />
  </li>

  <button @click="onClick">Randomize</button>
</template>

<script setup>

const items = ref([
  { msg: 'Foo', id: 'msg-1' },
  { msg: 'Bar', id: 'mg-2' }
])

const onClick = () => {
  items.value = shuffle(items.value);
};

</script>
```

````
