import { defineConfig } from 'vite'
import { baseConfig, commonBuildOptions, getAssetFileName, libEntry, libName } from './vite.config.base'

export default defineConfig({
  ...baseConfig,
  build: {
    ...commonBuildOptions,
    lib: {
      entry: libEntry,
      name: libName,
      fileName: 'index.umd'
    },
    rollupOptions: {
      ...commonBuildOptions.rollupOptions,
      output: {
        format: 'umd',
        entryFileNames: 'index.umd.js',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: getAssetFileName
      }
    }
  }
}) 