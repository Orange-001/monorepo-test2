<template>
  <div class="my-affix">
    <div class="my-affix-title">affix</div>
    <div class="my-affix-content">{{ content }}</div>

    <div class="my-affix-update" @click="update">
      <input v-model="inputContent" type="text" placeholder="请输入content" />
      <button>update</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { AffixPropsDefaults } from './affix'
import type { AffixProps, AffixEmits } from './affix'

const props = withDefaults(defineProps<AffixProps>(), AffixPropsDefaults)
const emit = defineEmits<AffixEmits>()

const inputContent = ref('')

function update() {
  emit('update', inputContent.value)
  nextTick(() => {
    console.log('props: ', props)
  })
}
</script>
