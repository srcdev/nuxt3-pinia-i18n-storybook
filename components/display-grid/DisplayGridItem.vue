<template>
  <div class="display-grid-item" :class="[styleClassPassthrough, { 'scroll-reveal': useScrollReveal }]" ref="visibilityRef">
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
</script>

<style scoped lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
