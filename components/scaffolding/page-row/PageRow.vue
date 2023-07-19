<template>
  <div class="page-row" :class="[pageRowTheme]">
    <div class="page-row-inner" :class="[pageRowInnerTheme, { 'fit-content': fitContent }, { 'has-gutters': applyGutters }]">
      <slot name="pageRowContent"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  fitContent: {
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
    validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green"].includes(val as string),
  },
  pageRowInnerTheme: {
    type: String,
    default: "theme-default",
    validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green"].includes(val as string),
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";

.page {
  &-row {
    margin: 0;

    &-inner {
      display: grid;
      margin: 0 auto;
      max-width: $desktop-content-width;

      &.fit-content {
        max-width: initial;
        padding: 0;
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
