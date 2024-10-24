<script setup lang="ts">
import { reactive, toRefs, watchEffect } from 'vue'
import {
  mergeImportMap,
  Repl,
  useStore,
  useVueImportMap,
  type StoreState,
} from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import welcomeCode from './template/welcome.vue?raw'
import tsconfigCode from './template/tsconfig.json?raw'

const previewOptions = {
  customCode: {
    importCode: `
      import 'my-ui-lib/dist/index.css';
      import MyUiLib from 'my-ui-lib';
    `,
    useCode: `app.use(MyUiLib)`,
  },
}

const { importMap: builtinImportMap, vueVersion } = useVueImportMap({
  runtimeDev: import.meta.env.PROD
    ? undefined
    : `${location.origin}/src/proxy/vue-dev-proxy`,
  serverRenderer: import.meta.env.PROD
    ? undefined
    : `${location.origin}/src/proxy/vue-server-renderer-dev-proxy`,
})
const storeState: Partial<StoreState> = toRefs(
  reactive({
    builtinImportMap: mergeImportMap(builtinImportMap.value, {
      imports: {
        'my-ui-lib': '/node_modules/my-ui-lib/dist/index.full.min.mjs',
        'my-ui-lib/': '/node_modules/my-ui-lib/',
      },
    }),
    vueVersion,
  }),
)
const store = useStore(storeState, location.hash)
watchEffect(() => history.replaceState({}, '', store.serialize()))

async function init() {
  const serializedState = location.hash.slice(1)
  serializedState && store.deserialize(serializedState)

  const files = store.getFiles()
  const newFiles: Record<string, string> = {
    'src/App.vue': welcomeCode,
    'tsconfig.json': tsconfigCode,
  }
  for (const filename in files) {
    let newFilename = filename
    if (
      !['import-map.json', 'tsconfig.json'].includes(filename) &&
      !filename.startsWith('src/')
    ) {
      newFilename = `src/${filename}`
    }
    newFiles[newFilename] = files[filename]
  }
  await store.setFiles(newFiles, 'src/App.vue')
}

init()
</script>

<template>
  <Repl
    ref="replRef"
    :store="store"
    :editor="Monaco"
    theme="dark"
    :preview-theme="true"
    :clear-console="false"
    :preview-options="previewOptions"
  />
</template>
