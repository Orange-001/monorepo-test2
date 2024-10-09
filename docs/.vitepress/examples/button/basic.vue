<template>
  <div>
    this is basic myButton example.
    <MyButton :content="content" @update="(val) => (content = val)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 本地调试
import { MyButton } from '@my-ui-lib/my-ui-lib'

const content = ref('')
</script>
<style lang="less" scoped></style>
