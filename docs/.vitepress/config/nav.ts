import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  {
    text: 'Components',
    link: '/zh-CN/components/overview',
    activeMatch: '/zh-CN/components/',
  },
  {
    text: 'Test',
    link: '/zh-CN/test/markdown-examples',
    activeMatch: '/zh-CN/test/',
  },
]
