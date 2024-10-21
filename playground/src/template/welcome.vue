<script setup lang="ts">
import { ref } from 'vue'
import { MyAffix } from 'my-ui-lib'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <MyAffix content="456" />
</template>
