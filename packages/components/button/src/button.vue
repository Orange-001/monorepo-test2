<template>
  <div class="my-button">
    <div class="my-button-title">button</div>
    <div class="my-button-content">{{ content }}</div>

    <div class="my-button-update" @click="update">
      <input v-model="inputContent" type="text" placeholder="请输入content" />
      <button>update</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { ButtonPropsDefaults } from './button'
import type { ButtonProps, ButtonEmits } from './button'

defineOptions({
  name: 'MyButton',
})
const props = withDefaults(defineProps<ButtonProps>(), ButtonPropsDefaults)
const emit = defineEmits<ButtonEmits>()

const inputContent = ref('')

function update() {
  emit('update', inputContent.value)
  nextTick(() => {
    console.log('props: ', props)
  })
}
</script>
