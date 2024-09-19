import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { parallel, series } from 'gulp'
import { buildConfig, run, runTask, withTaskName } from './src'
import { myUiLibOutput } from './src/utils/paths'

import type { TaskFunction } from 'gulp'
import type { Module } from './src'

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(myUiLibOutput, { recursive: true })),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
  ),
)

export * from './src'
