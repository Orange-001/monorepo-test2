<template>
  <div>
    <ElSpace :size="12" wrap>
      <MyButton>Primary</MyButton>
      <MyButton type="success">Success</MyButton>
      <MyButton type="warning">Warning</MyButton>
      <MyButton type="danger">Danger</MyButton>
      <MyButton type="info">Info</MyButton>
    </ElSpace>
  </div>
</template>

<script setup lang="ts">
// 本地调试
import { MyButton } from '@my-ui-lib/my-ui-lib'
import '@my-ui-lib/theme-chalk/src/button.less'
</script>
<style lang="less" scoped></style>
