<template>
  <div class="app">
    <h1>Vue3 组件库测试</h1>
    <Hello 
      msg="欢迎使用我们的组件库！" 
      desc="这是一个使用 Vue3 + TypeScript + Vite 构建的组件库示例"
      button-text="测试按钮"
      @click="handleHelloClick"
    />
  </div>
</template>

<script setup lang="ts">
const handleHelloClick = (event: MouseEvent) => {
  console.log('Hello组件被点击了！', event)
  alert('Hello组件被点击了！')
}
</script>

<style>
.app {
  padding: 40px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.app h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style> 