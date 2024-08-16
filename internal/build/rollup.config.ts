import { defineConfig } from 'rollup'
import vue from 'rollup-plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

export default defineConfig({
  input: '../../packages/components/index.ts',
  output: [
    {
      format: 'esm',
      dir: '../../dist/@my-ui-lib/es',
      preserveModules: true,
      preserveModulesRoot: '../../packages',
      sourcemap: true,
      entryFileNames: '[name].mjs',
    },
    {
      format: 'cjs',
      dir: '../../dist/@my-ui-lib/lib',
      preserveModules: true,
      preserveModulesRoot: '../../packages',
      sourcemap: true,
      entryFileNames: '[name].js',
    },
  ],
  plugins: [
    vue(),
    typescript(),
    postcss({
      extract: true,
      plugins: [],
    }),
    nodeResolve({ extensions: ['.mjs', '.js', '.json', '.ts'] }),
    commonjs(),
    esbuild({
      sourceMap: true,
      target: 'es2018',
      loaders: {
        '.vue': 'ts',
      },
    }),
  ],
  external: [/node_modules/],
  treeshake: false,
})
