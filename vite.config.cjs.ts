import { defineConfig } from 'vite'
import { baseConfig, commonBuildOptions, getAssetFileName, libEntry, libName } from './vite.config.base'

export default defineConfig({
  ...baseConfig,
  build: {
    ...commonBuildOptions,
    lib: {
      entry: libEntry,
      name: libName,
      fileName: 'index'
    },
    rollupOptions: {
      ...commonBuildOptions.rollupOptions,
      output: {
        format: 'cjs',
        entryFileNames: 'index.js',
        assetFileNames: getAssetFileName
      }
    }
  }
}) 