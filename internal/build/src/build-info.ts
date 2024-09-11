import path from 'path'
import { myUiLibOutput } from './utils/paths'

import type { ModuleFormat } from 'rollup'

export const modules = ['esm', 'cjs'] as const
export type Module = (typeof modules)[number]
export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  ext: 'mjs' | 'cjs' | 'js'
  output: {
    /** e.g: `es` */
    name: string
    /** e.g: `dist/element-plus/es` */
    path: string
  }

  bundle: {
    /** e.g: `element-plus/es` */
    path: string
  }
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(myUiLibOutput, 'es'),
    },
    bundle: {
      path: `my-ui-lib/es`,
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(myUiLibOutput, 'lib'),
    },
    bundle: {
      path: `my-ui-lib/lib`,
    },
  },
}
export const buildConfigEntries = Object.entries(
  buildConfig,
) as BuildConfigEntries

export type BuildConfig = typeof buildConfig
export type BuildConfigEntries = [Module, BuildInfo][]

export const target = 'es2018'
