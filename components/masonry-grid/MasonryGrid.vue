<template>
  <div class="masonry-grid-wrapper" ref="gridWrapper">
    <template v-for="item in gridData" :key="item.id">
      <div class="masonry-grid-item" :class="[{ 'scroll-reveal': useScrollReveal }]" ref="visibilityRef">
        <slot :name="item.id"></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { useElementSize } from "@vueuse/core";

  const props = defineProps({
    gridData: {
      type: Object,
      default: {}
    },
    minTileWidth: {
      type: Number,
      default: 312
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    },
    mobilePreferredColCount: {
      type: Number,
      default: 1
    },
    smTabletPreferredColCount: {
      type: Number,
      default: 3
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    useScrollReveal: {
      type: Boolean,
      default: true
    }
  });

  const gridData = toRef(() => props.gridData);

  const minTileWidth = toRef(props.minTileWidth);
  const gridWrapper = ref<HTMLDivElement | null>(null);
  const { width } = useElementSize(gridWrapper);
  const columnCount = computed(() => {
    return Math.floor(width.value / minTileWidth.value);
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  // $colCount: v-bind($columnCount);

  .masonry-grid {
    $self: &;
    &-wrapper {
      column-count: v-bind(columnCount);
      column-gap: 10px;
    }

    &-item {
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
  }
</style>
