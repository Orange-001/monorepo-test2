<template>
  <transition name="fade">
    <div v-show="visible" :class="['my-alert', `my-alert--${type}`]">
      <el-icon v-if="showIcon && iconComponent" class="my-alert__icon">
        <component :is="iconComponent" />
      </el-icon>

      <div class="my-alert-content">
        <span class="my-alert-title">
          <slot name="title">{{ title }}</slot>
        </span>

        <template v-if="closable">
          <el-icon class="my-alert-close-btn" @click="close">
            <Close />
          </el-icon>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { ElIcon } from 'element-plus'
import {
  Close,
  CircleCloseFilled,
  InfoFilled,
  SuccessFilled,
  WarningFilled,
} from '@element-plus/icons-vue'

import { AlertPropsDefaults } from './alert'
import type { AlertProps } from './alert'

defineOptions({ title: 'MyAlert' })
const emit = defineEmits<{
  close: [evt: MouseEvent]
}>()

const visible = ref(true)

const TypeComponentsMap = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled,
}
const iconComponent = computed(() => TypeComponentsMap[props.type])

const close = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}

const props = withDefaults(defineProps<AlertProps>(), AlertPropsDefaults)
</script>
