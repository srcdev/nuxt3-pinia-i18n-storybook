<template>
  <div class="flex-group-item" :class="[styleClassPassthrough, { grow: flexGrow }, { 'max-width': maxWidth }]" :data-test-id="dataTestId">
    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    flexGrow: {
      type: Boolean,
      default: false,
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
    maxWidth: {
      type: Boolean,
      default: false,
    },
    gap: {
      type: String,
      default: "0",
    },
    dataTestId: {
      type: String,
      default: null,
    },
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .flex-group-item {
    &.split-50 {
      width: calc(100% / 2 - v-bind(gap));
    }
    &.max-width {
      width: 100%;
    }

    &.grow {
      flex-grow: 1;
    }
  }
</style>
