import { rollup, OutputOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
// import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import { glob } from 'fast-glob'
import { myUiLibRoot, pkgRoot, projRoot } from '../utils/paths'
import { buildConfigEntries, target } from '../build-info'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import chalk from 'chalk'
import consola from 'consola'
import { excludeFiles, generateExternal, writeBundles } from '../utils'

export const buildModules = async () => {
  const input = excludeFiles(
    await glob(['**/*.{js,ts,vue}'], {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
      // ignore: ['**/node_modules'],
    }),
  )

  const bundle = await rollup({
    input,
    plugins: [
      vue({
        isProduction: true,
      }),
      vueJsx(),
      // typescript({
      //   tsconfig: path.resolve(projRoot, 'tsconfig.web.json'),
      // }),
      postcss({
        extract: true,
        plugins: [],
      }),
      nodeResolve({ extensions: ['.mjs', '.js', '.json', '.ts'] }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: await generateExternal({ full: false }),
    // external: [/node_modules/],
    treeshake: false,
  })

  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        // myUiLibRoot路径下的文件输出目录为dir下
        preserveModulesRoot: myUiLibRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    }),
  )
}
