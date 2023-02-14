<template>
  <div class="page-row" :class="[{ wide: isWide }]">
    <div class="page-row-inner">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isWide } = defineProps({
  isWide: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

.page {
  // $self: &;
  &-row {
    // $row: &;

    margin: 0;

    &-inner {
      margin: 0 auto;
      max-width: $max-content-width;
      padding: 0 $content-padding-width;

      &.wide {
        max-width: initial;
      }
    }

    // &.wide {
    //   #{ $row }-inner {
    //   }
    // }

    // & * {
    //   border: 1px solid black;
    // }
  }
}

.content {
  &-wrapper {
    padding: 0 $content-gutter-width;
  }
}
</style>
