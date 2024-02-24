<template>
  <div class="masonry-grid-ordered-wrapper" ref="gridWrapper">
    <template v-for="(item, index) in gridData?.quotes">
      <div class="masonry-grid-ordered-item" :class="[{ 'scroll-reveal': useScrollReveal }]" ref="visibilityRef">
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
      default: false
    }
  });

  const minTileWidth = toRef(props.minTileWidth);
  const gridWrapper = ref<null | HTMLDivElement>(null);
  const visibilityRef = ref<HTMLDivElement[]>([]);
  const { width } = useElementSize(gridWrapper);
  const columnCount = computed(() => {
    return Math.floor(width.value / minTileWidth.value);
  });

  const maxTileWidth = computed(() => {
    return props.fixedWidth ? minTileWidth.value + "px" : "1fr";
  });

  // const { visibilityRef, handleVisibility } = useElementIsVisibleInViewport();

  const updateGrid = () => {
    if (gridWrapper.value !== null) {
      const wrapperWidth = gridWrapper.value?.offsetWidth ?? 0;
      const itemWidth = visibilityRef.value[0].offsetWidth ?? 0;
      const colCount = Math.floor(wrapperWidth / itemWidth);
      const bottomMargin = 10;

      console.log(`wrapperWidth(${wrapperWidth}) | itemWidth(${itemWidth}) | colCount(${colCount})`);

      const colHeights = Array(colCount).fill(0);

      visibilityRef.value.forEach(function (item) {
        var minHeight = Math.min(...colHeights);
        var minIndex = colHeights.indexOf(minHeight);

        item.style.position = "absolute";
        item.style.top = minHeight + "px";
        item.style.width = itemWidth + "px";
        item.style.left = minIndex * (100 / colCount) + "%";

        colHeights[minIndex] += Math.floor(item.offsetHeight + bottomMargin);
      });

      var maxHeight = Math.max(...colHeights);
      gridWrapper.value.style.height = maxHeight + "px";
    }
  };

  useResizeObserver(gridWrapper, (entries) => {
    updateGrid();
  });

  onMounted(() => {
    updateGrid();
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .masonry-grid-ordered {
    $self: &;
    &-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @include mqMinTablet {
        grid-template-columns: repeat(3, 1fr);
      }
      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
      }
      // grid-template-columns: v-bind(maxTileWidth);
      // @include mqMinTablet {
      //   grid-template-columns: repeat(auto-fill, minmax(v-bind(minTileWidth), v-bind(maxTileWidth)));
      // }

      grid-gap: 10px;
      position: relative;
    }
    &-item {
      margin-bottom: 10px;
      transition: all ease-in-out 300ms;

      &.scroll-reveal {
        opacity: 0;
        transform: translateY(75px);
      }
    }
  }
</style>
