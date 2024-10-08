<template>
  <div>
    this is basic myButton example.
    <MyButton :content="content" @update="(val) => (content = val)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref('')
</script>
<style lang="less" scoped></style>
