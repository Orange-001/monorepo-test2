<template>
  <div style="max-width: 600px">
    <my-alert title="Success alert" :closable="false" type="success" />
    <my-alert title="Info alert" :closable="false" type="info" />
    <my-alert title="Warning alert" :closable="false" type="warning" />
    <my-alert title="Error alert" :closable="false" type="error" />
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
