import path from 'path'
import { Transform } from 'stream'
import { type TaskFunction, dest, parallel, series, src } from 'gulp'
import gulpLess from 'gulp-less'
import dartLess from 'less'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import consola from 'consola'
import postcss from 'postcss'
import cssnano from 'cssnano'
import { myUiLibOutput } from '/internal/build/src/utils'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(myUiLibOutput, 'theme-chalk')

/**
 * using `postcss` and `cssnano` to compress CSS
 * @returns
 */
function compressWithCssnano() {
  const processor = postcss([
    cssnano({
      preset: [
        'default',
        {
          // avoid color transform
          colormin: false,
          // avoid font transform
          minifyFontValues: false,
        },
      ],
    }),
  ])

  return new Transform({
    //
  })
}

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function buildThemeChalk() {
  const less = gulpLess(dartLess)
  const noMyPrefixFile = /(index|base|display)/
  return src(path.resolve(__dirname, 'src/*.less'))
    .pipe(less)
    .pipe(autoprefixer())
    .pipe(compressWithCssnano())
    .pipe(
      rename((path) => {
        if (!noMyPrefixFile.test(path.basename)) {
          path.basename = `my-${path.basename}`
        }
      }),
    )
    .pipe(dest(distFolder))
}

/**
 * copy from packages/theme-chalk/dist to dist/element-plus/theme-chalk
 */
export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}

/**
 * copy source file to packages
 */

export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src')),
  )
}

export const build: TaskFunction = parallel(
  copyThemeChalkSource,
  series(buildThemeChalk, copyThemeChalkBundle),
)

export default build
