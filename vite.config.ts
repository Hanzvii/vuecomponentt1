import { defineConfig } from 'vite'
import { baseConfig } from './vite.config.base'

// 开发环境配置
export default defineConfig({
  ...baseConfig,
  server: {
    port: 3000,
    open: true
  }
})