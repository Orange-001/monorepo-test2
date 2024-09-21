import type { Plugin } from 'rollup'
import { PKG_NAME, PKG_PREFIX } from '../const'

export function MyUiLibAlias(): Plugin {
  const themeChalk = 'theme-chalk'
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}`
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}`

  return {
    name: 'my-ui-lib-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}
