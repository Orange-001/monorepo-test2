<template>
  <button :class="['my-button', `my-button-${type}`, { disabled }]" disabled>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonPropsDefaults } from './button'
import type { ButtonProps } from './button'

defineOptions({
  name: 'MyButton',
})
withDefaults(defineProps<ButtonProps>(), ButtonPropsDefaults)
</script>
