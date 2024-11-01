<script setup lang="ts">
import { reactive, toRefs, ref, watchEffect } from 'vue'
import {
  mergeImportMap,
  Repl,
  useStore,
  useVueImportMap,
  File,
  type StoreState,
} from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import welcomeCode from './template/welcome.vue?raw'
import myUiLibCode from './template/my-ui-lib.ts?raw'
import mainCode from './template/main.vue?raw'
import tsconfigCode from './template/tsconfig.json?raw'
import Header from './components/Header.vue'

const replRef = ref<InstanceType<typeof Repl>>()

const previewOptions = {
  headHTML: `
    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"><\/script>
    <script>
      window.__unocss = {
        rules: [],
        presets: [],
      }
    <\/script>
  `,
  // customCode: {
  //   importCode: `
  //     import '@kechuanjia/my-ui-lib/dist/index.css';
  //     import 'element-plus/dist/index.css';
  //     import MyUiLib from '@kechuanjia/my-ui-lib';
  //     import 'element-plus/theme-chalk/dark/css-vars.css';
  //     import ElementPlus from 'element-plus';
  //   `,
  //   useCode: `
  //     app.use(MyUiLib);
  //     app.use(ElementPlus);
  //   `,
  // },
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
        // 'element-plus': '/node_modules/element-plus/dist/index.full.min.mjs',
        // 'element-plus/': '/node_modules/element-plus/',
        // '@kechuanjia/my-ui-lib':
        //   '/node_modules/@kechuanjia/my-ui-lib/dist/index.full.min.mjs',
        // '@kechuanjia/my-ui-lib/': '/node_modules/@kechuanjia/my-ui-lib/',
        // '@my-ui-lib/my-ui-lib':
        //   '/node_modules/@kechuanjia/my-ui-lib/dist/index.full.min.mjs',
        // '@my-ui-lib/': '/node_modules/@kechuanjia/my-ui-lib/',

        'element-plus':
          'https://cdn.jsdelivr.net/npm/element-plus@latest/dist/index.full.min.mjs',
        'element-plus/': 'https://cdn.jsdelivr.net/npm/element-plus@latest/',
        '@kechuanjia/my-ui-lib':
          'https://cdn.jsdelivr.net/npm/@kechuanjia/my-ui-lib@latest/dist/index.full.min.mjs',
        '@kechuanjia/my-ui-lib/':
          'https://cdn.jsdelivr.net/npm/@kechuanjia/my-ui-lib@latest/',
        '@my-ui-lib/my-ui-lib':
          'https://cdn.jsdelivr.net/npm/@kechuanjia/my-ui-lib@latest/dist/index.full.min.mjs',
        '@my-ui-lib/':
          'https://cdn.jsdelivr.net/npm/@kechuanjia/my-ui-lib@latest/',
      },
    }),
    vueVersion,
    files: {
      'src/my-ui-lib.ts': new File('src/my-ui-lib.ts', myUiLibCode),
      'src/main.vue': new File('src/main.vue', mainCode),
      'tsconfig.json': new File('tsconfig.json', tsconfigCode),
    },
    template: {
      welcomeSFC: welcomeCode,
    },
  }),
)
const store = useStore(storeState, location.hash)
watchEffect(() => history.replaceState({}, '', store.serialize()))

const refreshPreview = () => {
  replRef.value?.reload()
}
</script>

<template>
  <div>
    <Header :store="store" @refresh="refreshPreview" />
    <Repl
      ref="replRef"
      :store="store"
      :editor="Monaco"
      theme="dark"
      :preview-theme="true"
      :clear-console="false"
      :preview-options="previewOptions"
    />
  </div>
</template>

<style>
body {
  --at-apply: m-none text-13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --base: #444;
  --nav-height: 50px;
}

.vue-repl {
  height: calc(100vh - var(--nav-height)) !important;
}

/**
.dark .vue-repl,
.vue-repl {
  --color-branding: var(--el-color-primary) !important;
}

.dark body {
  background-color: #1a1a1a;
}
*/
</style>
