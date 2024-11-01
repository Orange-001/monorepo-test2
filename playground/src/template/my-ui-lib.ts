import '@kechuanjia/my-ui-lib/dist/index.css'
import MyUiLib from '@kechuanjia/my-ui-lib'
import { getCurrentInstance } from 'vue'

let installed = false
// await loadStyle()

export function setupMyUiLib() {
  if (installed) return
  const instance = getCurrentInstance()
  ;(instance as any).appContext.app.use(MyUiLib)
  installed = true
}

// export function loadStyle() {
//   const styles = ['#STYLE#', '#DARKSTYLE#'].map((style) => {
//     return new Promise((resolve, reject) => {
//       const link = document.createElement('link')
//       link.rel = 'stylesheet'
//       link.href = style
//       link.addEventListener('load', resolve)
//       link.addEventListener('error', reject)
//       document.body.append(link)
//     })
//   })
//   return Promise.allSettled(styles)
// }
