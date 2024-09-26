import path from 'path'
import fs from 'fs'
import type { MarkdownRenderer } from 'vitepress'
import { docRoot } from '../../../internal/build/src/utils/paths'

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?: MarkdownRenderer['renderer']['rules']['container']
}
export const demoPlugin = (md: MarkdownRenderer): ContainerOpts => {
  return {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(docRoot, '.vitepress/examples', `${sourceFile}.vue`),
            'utf-8',
          )
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<Demo source="${encodeURIComponent(
          md.render(`\`\`\` vue\n${source}\`\`\``),
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source,
        )}" description="${encodeURIComponent(md.render(description))}">`
      } else {
        return '</Demo>\n'
      }
    },
  }
}
