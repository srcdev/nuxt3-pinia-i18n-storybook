<template>
  <div class="masonry-grid-ordered-wrapper" ref="gridWrapper">
    <template v-for="item in gridData" :key="item.id">
      <div class="masonry-grid-ordered-item" ref="gridItemsRefs">
        <slot :name="item.id"></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { useBreakpoints, useElementSize, useResizeObserver } from "@vueuse/core";
  import type { IResponsiveWidths } from "@/types/types.responsiveWidths";

  const props = defineProps({
    gridData: {
      type: Object,
      default: {}
    },
    minTileWidth: {
      type: Number,
      default: 312
    },
    responsiveWidths: {
      type: Object as PropType<IResponsiveWidths>,
      default: {
        mobile: "120px",
        tablet: "200px",
        laptop: "240px",
        desktop: "280px"
      }
    },
    gap: {
      type: Number,
      default: 12
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String as PropType<String>,
      default: "left",
      validator: (val: string) => ["left", "center", "right"].includes(val)
    },
    useResponsiveWidths: {
      type: Boolean,
      default: false
    }
  });

  const gridData = toRef(() => props.gridData);

  const fixedWidth = toRef(() => props.fixedWidth);

  const { gridWrapper, gridWrapperWidth, minTileWidth, minTileWidthStr, maxTileWidthStr, gapNum, gapStr } = useGridItemsWidth(props.minTileWidth, props.useResponsiveWidths, props.responsiveWidths, fixedWidth.value, props.gap);

  const gridItemsRefs = ref<HTMLDivElement[]>([]);
  const { width } = useElementSize(gridWrapper);

  const columnCount = computed(() => {
    return Math.floor(width.value / minTileWidth.value);
  });

  const justify = computed(() => {
    return fixedWidth.value ? props.justify : "stretch";
  });

  const updateGrid = () => {
    if (gridWrapper.value !== null) {
      const wrapperWidth = gridWrapper.value?.offsetWidth ?? 0;
      const itemWidth = fixedWidth.value ? minTileWidth.value : Math.floor((wrapperWidth - (columnCount.value - 1) * gapNum.value) / columnCount.value);

      const colHeights = Array(columnCount.value).fill(0);

      gridItemsRefs.value.forEach((item) => {
        const minHeight = Math.min(...colHeights);
        const minIndex = colHeights.indexOf(minHeight);

        item.style.position = "absolute";
        item.style.top = minHeight + "px";
        item.style.width = itemWidth + "px";

        if (fixedWidth.value) {
          if (minIndex > 0) {
            item.style.left = Math.floor(minIndex * (minTileWidth.value + gapNum.value)) + "px";
          } else {
            item.style.left = "0";
          }
        } else {
          item.style.left = minIndex * (100 / columnCount.value) + "%";
        }
        colHeights[minIndex] += Math.floor(item.offsetHeight + gapNum.value);
      });

      const maxHeight = Math.max(...colHeights);
      gridWrapper.value.style.height = maxHeight + "px";
    }
  };

  useResizeObserver(gridWrapper, () => {
    updateGrid();
  });

  watch(
    () => fixedWidth.value,
    () => {
      updateGrid();
    }
  );

  watch(
    () => gridData.value,
    () => {
      updateGrid();
    }
  );
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .masonry-grid-ordered {
    $self: &;
    &-wrapper {
      background-color: $color-red-3;
      display: grid;
      position: relative;
      overflow: hidden;
      width: v-bind(gridWrapperWidth);
      justify-self: v-bind(justify);
      grid-gap: v-bind(gapStr);

      grid-template-columns: repeat(auto, minmax(v-bind(minTileWidthStr), v-bind(maxTileWidthStr)));
    }
  }
</style>
