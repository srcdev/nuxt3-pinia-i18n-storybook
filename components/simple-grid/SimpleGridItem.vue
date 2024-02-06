<template>
  <div class="simple-grid-item" :class="[styleClassPassthrough, { 'scroll-reveal': useScrollReveal }]" ref="visibilityRef">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    useScrollReveal: {
      type: Boolean,
      default: true,
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
  });

  const { visibilityRef, handleVisibility } = useElementIsVisibleInViewport();

  onMounted(() => {
    handleVisibility(true);
  });
</script>

<style scoped lang="scss">
  // @import "@/assets/styles/imports.scss";

  // .simple-grid-item {
  // outline: 1px solid $color-grey-3;
  // }
</style>
