<template>
  <div>
    <div>affix</div>
    <div>{{ content }}</div>
    <div>
      <span>dayjs: </span>
      <!-- <span>{{ now }}</span> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import dayjs from 'dayjs'

defineProps<{
  content: string
}>()

// const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
</script>
