import vue from 'unplugin-vue/rollup'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import alias from '@rollup/plugin-alias'
import path from 'path'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import css from 'rollup-plugin-css-only'
export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      // plugins: [terser()]
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      sourcemap: true,
      exports: 'auto',
      name: 'VueComponentT1',
      globals: {
        vue: 'Vue'
      }
      // plugins: [terser()]
    }
  ],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ]
    }),
    vue(),
    css({
      output: 'bundle.css'
    }),
    resolve({
      extensions: ['.js', '.ts', '.vue']
    }),
    // commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      rootDir: 'src'
    }),
    terser()
  ],
  external: ['vue']
}