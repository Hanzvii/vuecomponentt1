import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// 公共基础配置
export const baseConfig: UserConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
}

// 公共构建选项
export const commonBuildOptions = {
  rollupOptions: {
    external: ['vue']
  },
  cssCodeSplit: false,
  emptyOutDir: false
}

// DTS插件配置
export const dtsPlugin = dts({
  insertTypesEntry: true,
  cleanVueFileName: true,
  include: ['src/index.ts', 'src/components/**/*'],
  exclude: ['src/main.ts', 'src/App.vue']
})

// 资源文件名处理函数
export const getAssetFileName = (assetInfo: any) => {
  if (assetInfo.name?.endsWith('.css')) {
    return 'style.css'
  }
  return assetInfo.name || ''
}

// 库入口配置
export const libEntry = resolve(__dirname, 'src/index.ts')
export const libName = 'ViteComp' 