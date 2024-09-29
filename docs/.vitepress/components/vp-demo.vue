<template>
  <div class="example">
    <div class="example-showcase">
      <component :is="exampleComponent"></component>
    </div>

    <div class="example-source-wrapper">
      <div class="example-source" v-html="decodeURIComponent(source)"></div>
    </div>

    <div class="op-btns">
      <ElTooltip
        content="Edit in Playground"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
      >
        <i-ri-flask-line class="op-btn" />
      </ElTooltip>
      <ElTooltip
        content="Edit on GitHub"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
      >
        <i-ri-github-line class="op-btn" />
      </ElTooltip>
      <ElTooltip
        content="Copy code"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
      >
        <i-ri-flask-line class="op-btn" />
      </ElTooltip>
      <ElTooltip
        content="View source"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
      >
        <i-ri-code-line class="op-btn" />
      </ElTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, getCurrentInstance, onBeforeMount } from 'vue'
import type { Component } from 'vue'

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
