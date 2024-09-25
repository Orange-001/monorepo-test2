import mdContainer from 'markdown-it-container'
import type { MarkdownRenderer } from 'vitepress'
import { demoPlugin } from '../md-plugins'

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, 'demo', demoPlugin(md))
}
