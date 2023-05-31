<template>
  <div class="flex-group-item" :class="[classes, { grow: flexGrow }, { 'fit-width': fitWidth }]">
    <slot name="flexItem"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  flexGrow: {
    type: Boolean,
    default: false,
  },
  fitWidth: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/imports.scss";

.flex-group-item {
  &.fit-width {
    width: 100%;
  }
  &.grow {
    flex-grow: 1;
  }
}
</style>
