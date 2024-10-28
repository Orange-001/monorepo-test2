<template>
  <div style="max-width: 600px">
    <my-alert title="Success alert" type="success" show-icon />
    <my-alert title="Info alert" type="info" show-icon />
    <my-alert title="Warning alert" type="warning" show-icon />
    <my-alert title="Error alert" type="error" show-icon />
  </div>
</template>

<script setup lang="ts">
// 本地调试
import { MyAlert } from '@my-ui-lib/my-ui-lib'
import '@my-ui-lib/theme-chalk/src/alert.less'
</script>

<style scoped>
.my-alert {
  margin: 20px 0 0;
}
.my-alert:first-child {
  margin: 0;
}
</style>
