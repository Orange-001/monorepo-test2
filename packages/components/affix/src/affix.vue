<template>
  <div>
    <div>affix</div>
    <div>{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>
