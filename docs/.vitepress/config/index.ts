import path from 'path'
import { defineConfig } from 'vitepress'
import { mdPlugin } from '../vp-plugins'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { getNav } from './nav'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Ui Lib',
  description: 'A Vue 3 based component library for designers and developers',
  lastUpdated: true,
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh-CN',
      themeConfig: {
        nav: getNav('zh-CN'),
      },
    },
    'en-US': {
      label: 'en-US',
      lang: 'en-US', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      themeConfig: {
        nav: getNav('en-US'),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'npm', link: 'http://172.16.50.189:4873/' },
    ],
    search: {
      provider: 'local',
    },
    i18nRouting: false,
    outline: {
      level: [2, 3],
    },
  },
  markdown: {
    config: (md) => mdPlugin(md),
    image: {
      lazyLoading: true,
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: '~/',
          replacement: `${path.resolve(__dirname, '../../.vitepress')}/`,
        },
        // 本地调试组件时使用
        {
          find: /^@my-ui-lib/,
          replacement: `${path.resolve(__dirname, '../../../packages')}`,
        },
      ],
    },
    plugins: [
      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),

      UnoCSS(),
    ],
  },
})
