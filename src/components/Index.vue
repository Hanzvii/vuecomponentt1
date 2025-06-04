<template>
  <h1>{{ test }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  test: {
    type: String,
    required: true,
  },
});
</script>
<style>
body {
  background-color: red;
}
</style>