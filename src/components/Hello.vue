<template>
  <div class="hello-wrapper">
    <h1 class="hello-title">{{ msg }}</h1>
    <p class="hello-desc">{{ desc }}</p>
    <button class="hello-btn" @click="handleClick">{{ buttonText }}</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Props {
  msg?: string
  desc?: string
  buttonText?: string
}

withDefaults(defineProps<Props>(), {
  msg: 'Hello World!',
  desc: '这是一个Vue3组件库示例',
  buttonText: '点击我'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style scoped>
.hello-wrapper {
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.hello-title {
  font-size: 2em;
  margin: 0 0 10px 0;
  font-weight: bold;
}

.hello-desc {
  font-size: 1.1em;
  margin: 0 0 20px 0;
  opacity: 0.9;
}

.hello-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.3s ease;
}

.hello-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}
</style> 