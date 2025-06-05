import type { App } from 'vue'
import Hello from './components/Hello.vue'

// 组件列表
const components = [
  Hello
]

// 定义安装函数
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.__name || 'Hello', component)
  })
}

// 默认导出，支持 app.use() 方式
export default {
  install
}

// 单独导出组件，支持按需引入
export {
  Hello
}

// 类型声明
export type { App } 