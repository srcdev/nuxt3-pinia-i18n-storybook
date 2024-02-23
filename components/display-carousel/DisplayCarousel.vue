<template>
  <div class="display-carousel-outer" ref="carouselOuter">
    <div class="display-carousel" ref="carouselContent">
      <template v-for="item in data?.items">
        <div class="carouseI-items" ref="carouseItems">
          <DisplayCarouselFrameHomepage :alt="item.alt" :url="item.url" />
          <div class="controls">
            <NavigateButtonNext @click.prevent="goToNext()" size="large" button-text="Next" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ICarouselBasic } from "@/types/types.carousel";
  import { useElementSize, useEventListener, useResizeObserver } from "@vueuse/core";
  const props = defineProps({
    data: {
      type: Object as PropType<ICarouselBasic>,
      default: <ICarouselBasic>{
        items: [],
        total: 0,
        skip: 0,
        limit: 10
      }
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const carouselOuter = ref<null | HTMLDivElement>(null);
  const carouselOuterWidth = ref<null | number>(null);
  const carouselContent = ref<null | HTMLDivElement>(null);

  useEventListener(carouselContent, "transitionend", () => {
    transitionend();
  });
  const carouseItems = ref<any>([]);
  const carouselItemWidth = ref<null | number>(null);
  const carouselInitComplete = ref(false);

  const currentIndex = ref(1);
  const itemCount = ref(props.data.items.length);
  const forward = ref(true);
  const fullScreenOffset = ref(0);

  const cssInitialOffset = computed(() => {
    return `-${fullScreenOffset.value}px`;
  });
  const cssOngoinfNextOffset = ref("0px");
  const cssOngoinfPreviousOffset = ref("0px");

  const goToPrevious = () => {
    forward.value = false;
    carouselContent.value?.classList.remove("noTransition");
    carouselContent.value?.classList.add("display-carousel-transition");
    carouselContent.value?.classList.add("previousTransition");
  };

  const goToNext = () => {
    forward.value = true;
    carouselContent.value?.classList.remove("noTransition");
    carouselContent.value?.classList.add("display-carousel-transition");
    carouselContent.value?.classList.add("nextTransition");
  };

  const updateOrder = (index: number, order: number) => {
    // console.log(`updateOrder() | itemCount(${itemCount.value}), index(${index}), order(${order})`);
    carouseItems.value[index - 1].style.order = order;
  };

  const transitionend = () => {
    // console.log(`transitionend() | forward(${forward.value})`);

    if (carouselInitComplete.value) {
      // Go forward
      if (forward.value) {
        // console.log("FORWARD");

        if (currentIndex.value === itemCount.value) {
          currentIndex.value = 1;
        } else {
          currentIndex.value++;
        }
        // console.log(`currentIndex | ${currentIndex.value} >> cssOngoinfNextOffset(${cssOngoinfNextOffset.value})`);
        let order = 1;

        // change order from current position till last
        for (let i = currentIndex.value; i <= itemCount.value; i++) {
          updateOrder(i, order);
          order++;
        }

        // change order from first position till current
        for (let i = 1; i < currentIndex.value; i++) {
          updateOrder(i, order);
          order++;
        }
      }
      // Go Back
      else {
        // console.log("BACK");
        // Back is currently translating incorrectly, action btn hidden
        if (currentIndex.value === 1) {
          currentIndex.value = itemCount.value;
        } else {
          currentIndex.value--;
        }
        // console.log(`currentIndex | ${currentIndex.value} >> cssOngoinfPreviousOffset(${cssOngoinfPreviousOffset.value})`);
        let order = itemCount.value;

        // change order from current position till first
        for (let i = currentIndex.value; i >= 1; i--) {
          updateOrder(i, order);
          order--;
        }

        // // change order from last position till current
        for (let i = itemCount.value; i > currentIndex.value; i--) {
          updateOrder(i, order);
          order--;
        }
      }
    }

    carouselInitComplete.value = true;

    carouselContent.value?.classList.remove("display-carousel-transition");
    carouselContent.value?.classList.remove("initialOffset");
    carouselContent.value?.classList.remove("nextTransition");
    carouselContent.value?.classList.remove("previousTransition");
    carouselContent.value?.classList.add("noTransition");
  };

  useResizeObserver(carouselOuter, (entries) => {
    const entry = entries[0];
    carouselInitComplete.value = false;
    const { width: carouselWidth } = entry.contentRect;
    carouselOuterWidth.value = carouselWidth;

    carouselItemWidth.value = carouseItems.value[0].getBoundingClientRect().width;

    if (carouselItemWidth.value !== null) {
      fullScreenOffset.value = Math.floor(carouselItemWidth.value - (carouselOuterWidth.value - carouselItemWidth.value) / 2);
      cssOngoinfNextOffset.value = `-${carouselItemWidth.value + fullScreenOffset.value}px`;
      cssOngoinfPreviousOffset.value = `${carouselItemWidth.value + fullScreenOffset.value}px`;

      carouselContent.value?.classList.remove("noTransition");
      carouselContent.value?.classList.add("display-carousel-transition");
      // if (carouselOuterWidth.value > carouselItemWidth.value) {
      carouselContent.value?.classList.add("initialOffset");
      // } else {
      //   carouselInitComplete.value = true;
      // }
    }
  });

  // onMounted(async () => {
  //   await nextTick();
  //   const { width } = useElementSize(carouselOuter);
  //   carouselOuterWidth.value = width.value;
  //   console.log(`carouselOuterWidth: `, carouselOuterWidth.value);
  // });

  // watch(
  //   () => carouselOuterWidth.value,
  //   () => {
  //     console.log(`WATCH: carouselOuterWidth: `, carouselOuterWidth.value);
  //   }
  // );
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .display {
    &-carousel {
      &-outer {
        overflow-y: hidden;
      }

      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      // gap: 12px;

      &.initialOffset {
        transform: translateX(v-bind(cssInitialOffset));
      }

      &.nextTransition {
        transform: translateX(v-bind(cssOngoinfNextOffset));
        // transform: translateX(-1280px);
      }
      &.previousTransition {
        transform: translateX(v-bind(cssOngoinfPreviousOffset));
        // transform: translateX(-1280px);
      }
      &.noTransition {
        // transform: translateX(0);
        transform: translateX(v-bind(cssInitialOffset));
      }

      &-transition {
        transition: transform 0.7s ease-in-out;
        // transition: transform 5s ease-in-out;
      }

      .carouseI-items {
        width: 100%;
        max-width: $desktop;
        flex-shrink: 0;
        text-align: center;
        font-size: 20px;

        padding: 0 16px;

        display: grid;
        grid-template-columns: repeat(2, [col] auto);
        grid-template-rows: repeat(2, [row] auto);

        &:deep(.display-carousel-frame-homepage) {
          grid-column: col / span 2;
          grid-row: row / span 2;
        }

        .controls {
          grid-column: col 2;
          grid-row: row 1;
          transform: translate3d(-12px, 12px, 0);
          width: fit-content;
          justify-self: end;
        }
      }
    }
  }
</style>
