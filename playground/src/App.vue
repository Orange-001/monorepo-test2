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
import mainCode from './template/main.vue?raw'
import myUiLibCode from './template/my-ui-lib?raw'

const { importMap: builtinImportMap } = useVueImportMap({
  runtimeDev: import.meta.env.PROD
    ? undefined
    : `${location.origin}/src/vue-dev-proxy`,
  serverRenderer: import.meta.env.PROD
    ? undefined
    : `${location.origin}/src/vue-server-renderer-dev-proxy`,
})
const storeState: Partial<StoreState> = toRefs(
  reactive({
    builtinImportMap: mergeImportMap(builtinImportMap.value, {
      imports: {
        'my-ui-lib': '/node_modules/my-ui-lib/dist/index.full.min.mjs',
        'my-ui-lib/': '/node_modules/my-ui-lib/',
      },
    }),
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
    'src/my-ui-lib.ts': myUiLibCode,
    'src/main.vue': mainCode,
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
  await store.setFiles(newFiles, 'src/main.vue')
  store.files['src/main.vue'].hidden = true
  store.files['src/my-ui-lib.ts'].hidden = true
  store.activeFilename = 'src/App.vue'
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
  />
</template>
