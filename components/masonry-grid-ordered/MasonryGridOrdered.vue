<template>
  <div class="masonry-grid-ordered-wrapper" ref="gridWrapper">
    <template v-for="(item, index) in gridData?.quotes">
      <div class="masonry-grid-ordered-item" ref="gridItemsRefs">
        <div class="p-10 border border-1 border-grey-dark border-r-4">
          <p class="text-normal wght-700">{{ index + 1 }}: {{ item.author }}</p>
          <p class="text-normal">{{ item.quote }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { IQuotes } from "@/types/types.quotes";
  import { useElementSize, useResizeObserver } from "@vueuse/core";

  const props = defineProps({
    gridData: {
      type: Object,
      default: <IQuotes>{}
    },
    // gridData: {
    //   type: Object as PropType<IQuotes>,
    //   default: <IQuotes>{
    //     quotes: [],
    //     total: 0,
    //     skip: 0,
    //     limit: 10
    //   }
    // },
    minTileWidth: {
      type: Number,
      default: 312
    },
    gap: {
      type: Number,
      default: 12
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
    justify: {
      type: String as PropType<String>,
      default: "left",
      validator: (val: string) => ["left", "center", "right"].includes(val)
    }
  });

  const minTileWidth = toRef(() => props.minTileWidth);
  const gridWrapper = ref<null | HTMLDivElement>(null);
  const gridItemsRefs = ref<HTMLDivElement[]>([]);
  const { width } = useElementSize(gridWrapper);
  const columnCount = computed(() => {
    return Math.floor(width.value / minTileWidth.value);
  });

  const gapNum = toRef(props.gap);
  const gapStr = toRef(props.gap + "px");

  const fixedWidth = toRef(() => props.fixedWidth);
  const minTileWidthStr = toRef(props.minTileWidth + "px");
  const maxTileWidth = computed(() => {
    return fixedWidth.value ? minTileWidth.value + "px" : "1fr";
  });

  const justify = computed(() => {
    return fixedWidth.value ? props.justify : "stretch";
  });

  const updateGrid = () => {
    console.log("updateGrid");
    if (gridWrapper.value !== null) {
      const wrapperWidth = gridWrapper.value?.offsetWidth ?? 0;
      const itemWidth = fixedWidth.value ? minTileWidth.value : Math.floor((wrapperWidth - (columnCount.value - 1) * gapNum.value) / columnCount.value);

      const colHeights = Array(columnCount.value).fill(0);

      gridItemsRefs.value.forEach((item) => {
        var minHeight = Math.min(...colHeights);
        var minIndex = colHeights.indexOf(minHeight);

        item.style.position = "absolute";
        item.style.top = minHeight + "px";
        item.style.width = itemWidth + "px";
        item.style.left = minIndex * (100 / columnCount.value) + "%";

        colHeights[minIndex] += Math.floor(item.offsetHeight + gapNum.value);
      });

      var maxHeight = Math.max(...colHeights);
      gridWrapper.value.style.height = maxHeight + "px";
    }
  };

  useResizeObserver(gridWrapper, (entries) => {
    updateGrid();
  });

  onMounted(() => {
    // updateGrid();
  });

  watch(
    () => fixedWidth.value,
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
      display: grid;
      justify-self: v-bind(justify);
      grid-gap: v-bind(gapStr);
      grid-template-columns: repeat(2, minmax(v-bind(minTileWidthStr), v-bind(maxTileWidth)));
      position: relative;

      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(v-bind(minTileWidthStr), v-bind(maxTileWidth)));
      }
      @media only screen and (min-width: 1280px) {
        grid-template-columns: repeat(4, minmax(v-bind(minTileWidthStr), v-bind(maxTileWidth)));
      }
    }
  }
</style>
