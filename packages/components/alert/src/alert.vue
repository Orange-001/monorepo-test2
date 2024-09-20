<template>
  <div class="my-alert">
    <div>alert</div>
    <div>text: {{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ALERT_PROPS_DEFAULTS } from './alert'
import type { AlertProps } from './alert'

const props = withDefaults(defineProps<AlertProps>(), ALERT_PROPS_DEFAULTS)
</script>

<style lang="less" scoped>
.my-alert {
  color: red;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
}
</style>
