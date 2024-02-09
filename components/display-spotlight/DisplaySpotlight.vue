import type { routeLocationKey } from 'vue-router'; import type { transform } from '@babel/core'; import type { InputErrorMessage } from '#build/components';
<template>
  <div class="display-spotlight-wrapper" placement="left-center" gap="12px">
    <template v-if="type === 'gallery' && data.total > 0">
      <div v-for="item in data.items" class="display-spotlight">
        <div class="display-spotlight-inner">
          <p class="display-spotlight-text">
            <span class="text-normal wght-700 display-spotlight-text-inner">{{ item.alt }}</span>
          </p>
          <img :src="item.url" :alt="item.alt" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { IGalleryBasic } from "@/types/types.gallery";

  const props = defineProps({
    type: {
      type: String,
      required: true,
    },
    data: {
      type: Object as PropType<IGalleryBasic>,
      default: <IGalleryBasic>{
        items: [],
        total: 0,
        skip: 0,
        limit: 10,
      },
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
  });
  const { t } = useI18n();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .display-spotlight {
    &-wrapper {
    }

    &-inner {
      position: relative;
      overflow: hidden;
      width: 200px;
      height: 200px;
      border-radius: 6px;

      img {
        width: 100%;
        transition: all linear 200ms;

        &:hover {
          // width: 120%;
          transform: scale(1.1);
        }
      }
    }

    &-text {
      position: absolute;
      color: #fff;
      transform: rotate(180deg);
      writing-mode: vertical-lr;
      height: 100%;
      line-height: unset;
      padding: 0;
      z-index: 5;

      &-inner {
        display: block;
        background-color: #00000075;
        padding: 12px 8px 12px 12px;
        border-radius: 2px;
        margin: 2px;
      }
    }
  }
</style>
