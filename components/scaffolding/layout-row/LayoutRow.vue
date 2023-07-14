<template>
  <div class="layout-row" :class="[`bg-${bgColour}`, { collapse: collpasePaddingY }]">
    <div class="layout-row-inner" :class="[`${contentMaxWidth}-width`, `mt-${marginY} mb-${marginY}`, `ml-${marginX} mr-${marginX}`, `pt-${paddingY} pb-${paddingY}`, `pl-${paddingX} pr-${paddingX}`]">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
const {} = defineProps({
  contentMaxWidth: {
    type: String as PropType<String>,
    default: "viewport",
    validator: (val: string) => ["viewport", "desktop"].includes(val),
  },
  marginX: {
    type: Number as PropType<Number>,
    default: 0,
    validator: (val: number) => [0, 1, 2, 4, 6, 8, 10, 12, 18, 20, 24, 32, 40].includes(val),
  },
  marginY: {
    type: Number as PropType<Number>,
    default: 0,
    validator: (val: number) => [0, 1, 2, 4, 6, 8, 10, 12, 18, 20, 24, 32, 40].includes(val),
  },
  paddingX: {
    type: Number as PropType<Number>,
    default: 0,
    validator: (val: number) => [0, 1, 2, 4, 6, 8, 10, 12, 18, 20, 24, 32, 40].includes(val),
  },
  paddingY: {
    type: Number as PropType<Number>,
    default: 0,
    validator: (val: number) => [0, 1, 2, 4, 6, 8, 10, 12, 18, 20, 24, 32, 40].includes(val),
  },
  collpasePaddingY: {
    type: Boolean as PropType<Boolean>,
    default: true,
  },
  bgColour: {
    type: String as PropType<String>,
    default: "themeWhite",
    validator: (val: string) => ["themeWhite", "grey", "blue"].includes(val),
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";

.layout-row {
  position: relative;
  width: 100%;
  &.bg-white {
    background-color: #fff;
  }

  &.bg-blue {
    background-color: #265b9610;
  }

  &.bg-grey {
    background-color: #3c3c3c10;
  }

  &-inner {
    border: 0px solid green;
    margin: 0 auto;
    &.viewport-width {
      max-width: 100%;
    }
    &.desktop-width {
      max-width: 1024px;
    }
  }
}
</style>
