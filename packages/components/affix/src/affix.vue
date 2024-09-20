<template>
  <div>
    <div>affix</div>
    <div>{{ content }}</div>

    <div @click="update">
      <input v-model="inputContent" type="text" placeholder="请输入content" />
      <button>update</button>
    </div>
    <div>
      <span>dayjs: </span>
      <!-- <span>{{ now }}</span> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import dayjs from 'dayjs'
import { nextTick, ref } from 'vue'
import { AFFIX_PROPS_DEFAULTS } from './affix'
import type { AffixProps, AffixEmits } from './affix'

const props = withDefaults(defineProps<AffixProps>(), AFFIX_PROPS_DEFAULTS)
const emit = defineEmits<AffixEmits>()

const inputContent = ref('')

function update() {
  emit('update', inputContent.value)
  nextTick(() => {
    console.log('props: ', props)
  })
}

// const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
</script>
