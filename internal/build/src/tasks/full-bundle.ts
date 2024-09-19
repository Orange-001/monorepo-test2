import path from 'path'
import { TaskFunction, parallel } from 'gulp'
import {
  formatBundleFilename,
  generateExternal,
  myUiLibOutput,
  myUiLibRoot,
  withTaskName,
  writeBundles,
} from '../utils'
import { Plugin, rollup } from 'rollup'
import { PKG_BRAND_NAME, PKG_CAMELCASE_NAME } from '../const'

import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import { target } from '../build-info'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const banner = `/*! ${PKG_BRAND_NAME} */\n`

async function buildFullEntry(minify: boolean) {
  const plugins: Plugin[] = [
    vue({
      isProduction: true,
    }),
    vueJsx(),
    postcss({
      extract: true,
      plugins: [],
    }),
    nodeResolve({ extensions: ['.mjs', '.js', '.json', '.ts'] }),
    commonjs(),
    esbuild({
      exclude: [],
      sourceMap: minify,
      target,
      loaders: {
        '.vue': 'ts',
      },
      treeShaking: true,
      // Move all legal comments to the end of the file.
      legalComments: 'eof',
    }),
  ]
  if (minify) {
    plugins.push(
      minifyPlugin({
        target,
        sourceMap: true,
      }),
    )
  }

  const bundle = await rollup({
    input: path.resolve(myUiLibRoot, 'index.ts'),
    plugins,
    external: await generateExternal({ full: true }),
    treeshake: true,
  })
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(
        myUiLibOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'js'),
      ),
      exports: 'named',
      name: PKG_CAMELCASE_NAME,
      globals: {
        vue: 'Vue',
      },
      sourcemap: minify,
      banner,
    },
    {
      format: 'esm',
      file: path.resolve(
        myUiLibOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'mjs'),
      ),
      sourcemap: minify,
      banner,
    },
  ])
}

async function buildFullLocale(minify: boolean) {}

export const buildFull = (minify: boolean) => async () =>
  Promise.all([buildFullEntry(minify)])

export const buildFullBundle: TaskFunction = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false)),
)
