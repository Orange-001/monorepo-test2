import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/zh-CN/components/': [
    {
      text: 'Overview',
      items: [
        {
          text: 'overview',
          link: '/zh-CN/components/overview',
        },
      ],
    },
    {
      text: 'Basic',
      items: [
        {
          text: 'Affix',
          link: '/zh-CN/components/affix',
        },
      ],
    },
  ],
  '/zh-CN/test/': [
    { text: 'Markdown Examples', link: '/zh-CN/test/markdown-examples' },
    { text: 'Runtime API Examples', link: '/zh-CN/test/api-examples' },
    { text: 'VitePress Examples', link: '/zh-CN/test/vite-press-examples' },
  ],
}
