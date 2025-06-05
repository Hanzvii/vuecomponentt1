import { defineConfig } from 'vite'
import { baseConfig, commonBuildOptions, dtsPlugin, getAssetFileName, libEntry, libName } from './vite.config.base'

export default defineConfig({
  ...baseConfig,
  plugins: [...baseConfig.plugins!, dtsPlugin],
  build: {
    ...commonBuildOptions,
    lib: {
      entry: libEntry,
      name: libName,
      fileName: 'index.es'
    },
    rollupOptions: {
      ...commonBuildOptions.rollupOptions,
      output: {
        format: 'es',
        entryFileNames: 'index.es.js',
        assetFileNames: getAssetFileName
      }
    }
  }
}) 