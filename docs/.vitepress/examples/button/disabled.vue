<template>
  <div>
    <ElSpace :size="12" wrap>
      <MyButton disabled>Primary</MyButton>
      <MyButton type="success" disabled>Success</MyButton>
      <MyButton type="warning" disabled>Warning</MyButton>
      <MyButton type="danger" disabled>Danger</MyButton>
      <MyButton type="info" disabled>Info</MyButton>
    </ElSpace>
  </div>
</template>

<script setup lang="ts">
// 本地调试
import { MyButton } from '@my-ui-lib/my-ui-lib'
import '@my-ui-lib/theme-chalk/src/button.less'
</script>
<style scoped></style>
