# ViteComp Vue3 组件库

一个基于 Vue3 + TypeScript + Vite 构建的组件库。

## 特性

- ✅ Vue3 + TypeScript
- ✅ Vite 6.x 最新版本 + 安全修复
- ✅ 自动生成 TypeScript 声明文件
- ✅ 支持 `.use()` 插件方式引入
- ✅ CSS 样式单独打包
- ✅ 支持按需引入
- ✅ 最新依赖版本，性能优化

## 安装

```bash
npm install vitecomp
```

## 使用

### 完整引入

```typescript
import { createApp } from 'vue'
import ViteComp from 'vitecomp'
import 'vitecomp/dist/style.css'

const app = createApp(App)
app.use(ViteComp)
```

### 按需引入

```typescript
import { Hello } from 'vitecomp'
import 'vitecomp/dist/style.css'

export default {
  components: {
    Hello
  }
}
```

## 组件

### Hello

基础的问候组件。

```vue
<template>
  <Hello 
    msg="自定义消息" 
    desc="自定义描述"
    button-text="自定义按钮文本"
    @click="handleClick"
  />
</template>
```

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| msg | 主标题文本 | string | 'Hello World!' |
| desc | 描述文本 | string | '这是一个Vue3组件库示例' |
| buttonText | 按钮文本 | string | '点击我' |

#### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 按钮点击事件 | (event: MouseEvent) |

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build
```

## 构建产物

- `dist/index.js` - CommonJS 格式
- `dist/index.es.js` - ES Module 格式
- `dist/index.d.ts` - TypeScript 声明文件
- `dist/style.css` - 样式文件

## 版本更新日志

### v1.0.1 (最新)
- 🚀 升级 Vite 到 6.3.5（修复安全漏洞 CVE-2025-31125）
- 🚀 升级 @vitejs/plugin-vue 到 5.2.4
- 🚀 升级 TypeScript 到 5.6.0
- 🚀 升级 vite-plugin-dts 到 4.4.0
- 🚀 升级 vue-tsc 到 2.1.0
- 🚀 升级 @types/node 到 22.10.0
- ✨ 支持最新的 Vue 3 特性和优化
- 🔧 优化构建性能和类型检查 