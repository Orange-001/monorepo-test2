<template>
  <div class="my-alert">
    <div>alert</div>
    <div>text: {{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
import { AlertPropsDefaults } from './alert'
import type { AlertProps } from './alert'

defineOptions({
  name: 'MyAlert',
})

const props = withDefaults(defineProps<AlertProps>(), AlertPropsDefaults)
</script>
