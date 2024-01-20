<template>
  <div class="masonry-grid-item" :class="[{ 'scroll-reveal': useScrollReveal }]" ref="visibilityRef">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    useScrollReveal: {
      type: Boolean,
      default: true,
    },
  });

  const { visibilityRef, handleVisibility } = useElementIsVisibleInViewport();

  onMounted(() => {
    handleVisibility(true);
  });
</script>

<style scoped lang="scss">
  // @import "@/assets/styles/imports.scss";

  .masonry-grid-item {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
    transition: all ease-in-out 300ms;

    &.scroll-reveal {
      opacity: 0;
      transform: translateY(75px);
    }
  }
</style>
