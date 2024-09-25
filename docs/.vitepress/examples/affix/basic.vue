<template>
  <div>
    this is basic myAffix example.
    <MyAffix :content="content" @update="(val) => (content = val)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref('')
</script>
<style lang="less" scoped></style>
