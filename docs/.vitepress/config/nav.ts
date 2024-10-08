import type { DefaultTheme } from 'vitepress'

export const getNav = (lang: string): DefaultTheme.Config['nav'] => {
  const cases = {
    'zh-CN': [
      { text: '主页', link: '/', activeMatch: '^/$' },
      {
        text: '组件',
        link: '/zh-CN/components/overview',
        activeMatch: '/zh-CN/components/',
      },
      {
        text: '测试',
        link: '/zh-CN/test/markdown-examples',
        activeMatch: '/zh-CN/test/',
      },
    ],
    'en-US': [
      { text: 'Home', link: '/en-US', activeMatch: '^/en-US/$' },
      {
        text: 'Components',
        link: '/en-US/components/overview',
        activeMatch: '/en-US/components/',
      },
      {
        text: 'Test',
        link: '/en-US/test/markdown-examples',
        activeMatch: '/en-US/test/',
      },
    ],
  } as Record<string, DefaultTheme.Config['nav']>

  return cases[lang] || []
}
