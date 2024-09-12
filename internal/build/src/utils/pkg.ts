import { PKG_NAME, PKG_PREFIX } from '../const'
import { buildConfig } from '../build-info'
import { projRoot } from '../utils'

import type { Module } from '../build-info'

/** used for type generator */
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]

  return (id: string) => {
    id = id.replaceAll(`${PKG_PREFIX}/theme-chalk`, `${PKG_NAME}/theme-chalk`)
    id = id.replaceAll(`${PKG_PREFIX}/`, `${config.bundle.path}/`)
    return id
  }
}

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter(
    (path) =>
      !excludes.some((exclude) =>
        path.slice(projRoot.length).includes(exclude),
      ),
  )
}
