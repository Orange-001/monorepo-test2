<template>
  <ClientOnly>
    <div class="example">
      <div class="example-showcase">
        <component :is="exampleComponent"></component>
      </div>
      <div class="example-source-wrapper">
        <div class="example-source" v-html="decodeURIComponent(source)"></div>
      </div>
    </div>
  </ClientOnly>
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

<style lang="less" scoped></style>
