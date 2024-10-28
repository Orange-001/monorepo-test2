<template>
  <div class="overview-container">
    <div class="main-content">
      <div
        v-for="(group, groupIndex) in filteredSidebars"
        :key="groupIndex"
        class="component-group"
      >
        <p class="component-title">
          {{ group.text }}
          <el-tag effect="dark" round size="small">
            {{ group.items?.length }}
          </el-tag>
        </p>
        <div class="card-content">
          <el-card
            v-for="(item, index) in group.items"
            :key="index"
            tabindex="0"
            shadow="hover"
            @click="router.go(item.link)"
          >
            <template #header>
              <el-text truncated>{{ item.text }}</el-text>
            </template>

            <template #default>
              <component :is="getIcon(item.link!)" v-if="getIcon(item.link!)" />
              <span v-else>Todo</span>
            </template>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import overviewIcons from '~/components/overview-icons'

const router = useRouter()
const { sidebar } = useSidebar()
const filteredSidebars = computed(() => sidebar.value.slice(1))

const getIcon = (link: string) => {
  const name = link.split('/').pop()
  return name ? overviewIcons[name] : null
}
</script>
<style lang="less" scoped>
.overview-container {
  position: relative;

  .search-content {
    position: sticky;
    top: 60px;
    z-index: 10;

    .el-input {
      background: var(--bg-color);
    }
  }

  .main-content {
    .component-group {
      margin-top: 32px;

      .component-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
        color: var(--el-text-color-primary);
        gap: 8px;
      }

      .card-content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;

        :deep(.el-card) {
          cursor: pointer;
          transition: none;

          &:focus-visible {
            outline: 2px solid var(--el-color-primary);
            outline-offset: 1px;
          }

          .el-card__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;

            .el-text {
              font-size: 14px;
              font-weight: 500;
              color: var(--el-text-color-regular);
              line-height: 24px;
            }
          }

          .el-card__body {
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 280 / 180;

            svg {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }

    .designed-by {
      text-align: right;
      font-size: 14px;
    }
  }
}
</style>
