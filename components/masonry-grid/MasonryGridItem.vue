<template>
  <div class="masonry-grid-item" :class="[{ 'scroll-reveal': useScrollReveal }]" ref="visibilityRef">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    useScrollReveal: {
      type: Boolean,
      default: true
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const { visibilityRef, handleVisibility } = useElementIsVisibleInViewport();

  onMounted(() => {
    handleVisibility(true);
  });

  // onUpdated(() => {
  //   handleVisibility(true);
  // });
</script>

<style scoped lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
