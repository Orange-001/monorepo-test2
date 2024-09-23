import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { parallel, series } from 'gulp'
import { buildConfig, run, runTask, withTaskName } from './src'
import { buildOutput, myUiLibOutput, myUiLibPackage, projRoot } from './src'

import type { TaskFunction } from 'gulp'
import type { Module } from './src'

export const copyFiles = () =>
  Promise.all([
    copyFile(myUiLibPackage, path.join(myUiLibOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(myUiLibOutput, 'README.md'),
    ),
    copyFile(
      path.resolve(projRoot, 'typings', 'global.d.ts'),
      path.resolve(myUiLibOutput, 'global.d.ts'),
    ),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path),
    )
  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const copyFullStyle = async () => {
  await mkdir(path.resolve(myUiLibOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(myUiLibOutput, 'theme-chalk/index.css'),
    path.resolve(myUiLibOutput, 'dist/index.css'),
  )
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(myUiLibOutput, { recursive: true })),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build'),
      ),
      copyFullStyle,
    ),
  ),

  parallel(copyTypesDefinitions, copyFiles),
)

export * from './src'
