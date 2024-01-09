<template>
  <div class="page-row" :class="[styleClassPassthrough, pageRowTheme]">
    <div class="page-row-inner" :class="[pageRowInnerTheme, { 'use-available-width': useAvailableWidth }, { 'has-gutters': applyGutters }]">
      <slot name="pageRowContent"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    useAvailableWidth: {
      type: Boolean,
      default: false,
    },
    applyGutters: {
      type: Boolean,
      default: false,
    },
    pageRowTheme: {
      type: String,
      default: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green", "theme-black"].includes(val as string),
    },
    pageRowInnerTheme: {
      type: String,
      default: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green", "theme-black"].includes(val as string),
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .page {
    &-row {
      margin: 0;

      &-inner {
        display: grid;
        margin: 0 auto;
        max-width: $desktop-content-width;

        &.use-available-width {
          max-width: initial;
          padding: 0;
        }

        padding: 0 16px;
        @include mqMinTablet {
          padding: 0 40px;
        }

        &.has-gutters {
          padding: 0 16px;

          @include mqMinTablet {
            padding: 0 40px;
          }

          @include mqDesktopContentMax {
            padding: 0 32px;
          }
        }
      }
    }
  }

  .content {
    &-wrapper {
      padding: 0;
    }
  }
</style>
