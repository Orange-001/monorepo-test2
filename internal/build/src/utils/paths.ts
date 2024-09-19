import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..', '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const myUiLibRoot = resolve(pkgRoot, 'my-ui-lib')
export const buildRoot = resolve(projRoot, 'internal', 'build')

export const buildOutput = resolve(projRoot, 'dist')
export const myUiLibOutput = resolve(buildOutput, 'my-ui-lib')

export const myUiLibPackage = resolve(myUiLibRoot, 'package.json')
