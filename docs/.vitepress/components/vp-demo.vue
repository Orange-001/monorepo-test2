<template>
  <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
  <div text="sm" m="y-4" v-html="decodedDescription" />

  <div class="example">
    <div class="example-showcase">
      <component :is="exampleComponent"></component>
    </div>

    <ElDivider class="!m-0" />

    <div class="op-btns">
      <ElTooltip
        content="在Playground中编辑"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
      >
        <i-ri-flask-line class="op-btn" @click="onPlaygroundClick" />
      </ElTooltip>
      <ElTooltip
        content="在GitHub中编辑"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
      >
        <a
          :href="`https://github.com/Orange-001/monorepo-test2/edit/main/docs/.vitepress/examples/${path}.vue`"
          rel="noreferrer noopener"
          target="_blank"
        >
          <i-ri-github-line class="op-btn" />
        </a>
      </ElTooltip>
      <ElTooltip
        content="复制代码"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
      >
        <i-ri-file-copy-line class="op-btn" @click="copyCode" />
      </ElTooltip>
      <ElTooltip
        content="查看源代码"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
      >
        <i-ri-code-line
          class="op-btn"
          @click="toggleSourceVisible(!sourceVisible)"
        />
      </ElTooltip>
    </div>

    <ElCollapseTransition>
      <div class="example-source-wrapper" v-show="sourceVisible">
        <div class="example-source" v-html="decodeURIComponent(source)"></div>
      </div>
    </ElCollapseTransition>
  </div>
</template>

<script setup lang="ts">
import { computed, shallowRef, getCurrentInstance, onBeforeMount } from 'vue'
import { isClient, useClipboard, useToggle } from '@vueuse/core'
import type { Component } from 'vue'
import { ElMessage } from 'element-plus'

const instance = getCurrentInstance()
const props = defineProps<{
  source: string
  path: string
  rawSource: string
  description: string
}>()
const exampleComponent = shallowRef<Component>()

onBeforeMount(() => {
  loadShowcaseComponent()
})

function loadShowcaseComponent() {
  const exampleComponents =
    instance?.appContext.config.globalProperties.$exampleComponents
  if (!exampleComponents) {
    throw new Error('no exampleComponents')
  }

  Object.entries(exampleComponents).forEach(([path, loader]) => {
    if (path.endsWith(`${props.path}.vue`)) {
      ;(loader as any)().then((module) => {
        exampleComponent.value = module.default
      })
    }
  })
}

const decodedDescription = computed(() => decodeURIComponent(props.description))

const onPlaygroundClick = () => {
  const code = decodeURIComponent(props.rawSource)
  const originCode = {
    ['src/App.vue']: code,
  }

  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(originCode))))
  const link = `http://localhost:5174/#${encoded}`
  if (!isClient) return
  window.open(link)
}

const [sourceVisible, toggleSourceVisible] = useToggle()

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

async function copyCode() {
  if (!isSupported.value) {
    ElMessage.error('复制失败')
    return
  }
  try {
    await copy()
    ElMessage.success('复制成功')
  } catch (error: any) {
    ElMessage.error(error.message)
  }
}
</script>

<style lang="less" scoped>
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);

  .example-showcase {
    padding: 1.5rem;
    margin: 0.5px;
    background-color: var(--bg-color);
  }

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }
}
</style>
