import { computed, createApp, h, ref, watchEffect } from 'vue'
import {
  type OutputModes,
  File,
  Repl,
  useStore,
  useVueImportMap,
} from '@vue/repl'
import MonacoEditor from '@vue/repl/monaco-editor'
import welcomeCode from './template/welcome.vue?raw'

const window = globalThis.window as any
window.process = { env: {} }

// const saved = location.hash
//   ? JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(1)))))
//   : undefined

const App = {
  setup() {
    const query = new URLSearchParams(location.search)
    const { importMap: builtinImportMap, vueVersion } = useVueImportMap({
      runtimeDev: import.meta.env.PROD
        ? undefined
        : `${location.origin}/src/vue-dev-proxy`,
      serverRenderer: import.meta.env.PROD
        ? undefined
        : `${location.origin}/src/vue-server-renderer-dev-proxy`,
    })
    // function initFiles() {
    //   const files: Record<string, string> = Object.create(null)

    //   const saved = location.hash
    //     ? JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(1)))))
    //     : undefined
    //   if (saved) {
    //     for (let [filename, file] of Object.entries(saved)) {
    //       if (filename === '_o') continue

    //       files[filename] = file as string
    //     }
    //   } else {
    //     files['src/App.vue'] = welcomeCode
    //     console.log('welcomeCode: ', welcomeCode)
    //   }
    //   return files
    // }
    const store = (window.store = useStore(
      {
        builtinImportMap: ref({
          imports: {
            ...builtinImportMap.value.imports,
            'my-ui-lib': '/node_modules/my-ui-lib/dist/index.full.min.mjs',
            'my-ui-lib/': '/node_modules/my-ui-lib/',
          },
          scopes: builtinImportMap.value.scopes,
        }),
        vueVersion: ref('^3.5.11'),
        showOutput: ref(query.has('so')),
        outputMode: ref((query.get('om') as OutputModes) || 'preview'),
        // files: ref(initFiles()),
        // activeFilename: ref('src/App.vue'),
        template: ref({
          welcomeSFC: welcomeCode,
        }),
      },
      location.hash,
    ))

    watchEffect(() => history.replaceState({}, '', store.serialize()))

    // setTimeout(() => {
    //   store.setFiles(
    //     {
    //       'src/index.html': '<h1>yo</h1>',
    //       'src/main.js': 'document.body.innerHTML = "<h1>hello</h1>"',
    //       'src/foo.js': 'document.body.innerHTML = "<h1>hello</h1>"',
    //       'src/bar.js': 'document.body.innerHTML = "<h1>hello</h1>"',
    //       'src/baz.js': 'document.body.innerHTML = "<h1>hello</h1>"',
    //     },
    //     'src/index.html',
    //   )
    // }, 1000)

    // store.vueVersion = '3.4.1'
    const theme = ref<'light' | 'dark'>('dark')
    window.theme = theme
    const previewTheme = ref(false)
    window.previewTheme = previewTheme

    return () =>
      h(Repl, {
        store,
        theme: theme.value,
        previewTheme: previewTheme.value,
        editor: MonacoEditor,
        // layout: 'vertical',
        ssr: true,
        sfcOptions: {
          script: {
            // inlineTemplate: false
          },
        },
        // showCompileOutput: false,
        // showImportMap: false
        editorOptions: {
          autoSaveText: '💾',
          monacoOptions: {
            // wordWrap: 'on',
          },
        },
        // autoSave: false,
      })
  },
}

createApp(App).mount('#app')
