import '../styles/css-var.less'
import 'uno.css'
import './custom.css'
import 'my-ui-lib/dist/index.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import DefaultTheme from 'vitepress/theme'
import MyUiLib from 'my-ui-lib'
import ElementPlus from 'element-plus'

import Overview from '../components/globals/overview.vue'
import VPDemo from '../components/vp-demo.vue'

import type { Theme } from 'vitepress'
import type { Component } from 'vue'

const globals: [string, Component][] = [
  ['Demo', VPDemo],
  ['Overview', Overview],
]

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.$exampleComponents = import.meta.glob(
      '../examples/**/*.vue',
    )

    app.use(MyUiLib)
    app.use(ElementPlus)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
} satisfies Theme
