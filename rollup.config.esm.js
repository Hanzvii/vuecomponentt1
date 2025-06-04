import config from './rollup.config.js'
export default {
    ...config,
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
}