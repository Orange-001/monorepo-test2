import './custom.css'

import MyUiLib from 'my-ui-lib'

import DefaultTheme from 'vitepress/theme'

import VPDemo from '../components/vp-demo.vue'

import type { Theme } from 'vitepress'
import type { Component } from 'vue'

const globals: [string, Component][] = [['Demo', VPDemo]]

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.$exampleComponents = import.meta.glob(
      '../examples/**/*.vue',
    )

    app.use(MyUiLib)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
} satisfies Theme
