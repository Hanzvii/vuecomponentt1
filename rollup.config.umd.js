import config from './rollup.config.js'
export default {
    ...config,
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      sourcemap: true,
      exports: 'named',
      name: 'VueComponentT1',
      globals: {
        vue: 'Vue'
      }
    }
}