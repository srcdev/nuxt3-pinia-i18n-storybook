<template>
  <div class="display-row" :class="[styleClassPassthrough, displayRowTheme]">
    <div class="display-row-inner" :class="[displayRowInnerTheme, { 'use-available-width': useAvailableWidth }, { 'has-gutters': applyGutters }]">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    useAvailableWidth: {
      type: Boolean,
      default: false
    },
    applyGutters: {
      type: Boolean,
      default: false
    },
    displayRowTheme: {
      type: String,
      default: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green", "theme-black"].includes(val as string)
    },
    displayRowInnerTheme: {
      type: String,
      default: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green", "theme-black"].includes(val as string)
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .display {
    &-row {
      margin: 0;

      &-inner {
        display: grid;
        margin: 0 auto;
        max-width: $desktop;

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
