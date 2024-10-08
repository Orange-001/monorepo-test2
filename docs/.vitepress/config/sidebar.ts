import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/zh-CN/components/': [
    {
      text: '组件总览',
      link: '/zh-CN/components/overview',
    },
    {
      text: '基础组件',
      items: [
        {
          text: 'Affix 固钉',
          link: '/zh-CN/components/affix',
        },
        {
          text: 'Button 按钮',
          link: '/zh-CN/components/button',
        },
      ],
    },
  ],
  '/zh-CN/test/': [
    { text: 'Markdown 示例', link: '/zh-CN/test/markdown-examples' },
    { text: 'API 示例', link: '/zh-CN/test/api-examples' },
    { text: 'VitePress 示例', link: '/zh-CN/test/vite-press-examples' },
  ],
  '/en-US/components/': [
    {
      text: 'Overview',
      link: '/en-US/components/overview',
    },
    {
      text: 'Basic',
      items: [
        {
          text: 'Affix',
          link: '/en-US/components/affix',
        },
      ],
    },
  ],
  '/en-US/test/': [
    { text: 'Markdown Examples', link: '/en-US/test/markdown-examples' },
    { text: 'Runtime API Examples', link: '/en-US/test/api-examples' },
    { text: 'VitePress Examples', link: '/en-US/test/vite-press-examples' },
  ],
}
