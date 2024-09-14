import path from 'path'
import { TaskFunction, parallel } from 'gulp'
import { myUiLibRoot, withTaskName } from '../utils'
import { Plugin, rollup } from 'rollup'
import {} from '../utils'

async function buildFullEntry(minify: boolean) {
  // const plugins: Plugin[] = []
  // if (minify) {
  //   plugins.push()
  // }
  // const bundle = await rollup({
  //   input: path.resolve(myUiLibRoot, 'index.ts'),
  //   plugins,
  // })
}

async function buildFullLocale(minify: boolean) {}

export const buildFull = (minify: boolean) => async () => Promise.all([])

export const buildFullBundle: TaskFunction = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false)),
)
