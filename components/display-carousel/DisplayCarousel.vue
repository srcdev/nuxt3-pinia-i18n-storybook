<template>
  <div class="display-carousel-outer" ref="carouselOuter">
    <div class="display-carousel" ref="carouselContent">
      <template v-for="item in data?.items">
        <div class="carouseI-items" ref="carouseItems">
          <DisplaySpotlight :alt="item.alt" :url="item.url" />
        </div>
      </template>
    </div>
  </div>

  <InputButton @click.prevent="goToNext()" variant="secondary" button-text="Move item" style-class-passthrough="move-button mt-20 mb-20"></InputButton>
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

  const fullScreenOffset = ref(0);

  const cssInitialOffset = computed(() => {
    return `-${fullScreenOffset.value}px`;
  });
  const cssOngoinfOffset = ref("0px");

  const goToNext = () => {
    carouselContent.value?.classList.add("display-carousel-transition");
    carouselContent.value?.classList.add("nextTransition");
    carouselContent.value?.classList.remove("noTransition");
  };

  const updateOrder = (index: number, order: number) => {
    console.log(`updateOrder() | itemCount(${itemCount.value}), index(${index}), order(${order})`);
    carouseItems.value[index - 1].style.order = order;
  };

  const transitionend = () => {
    console.log("transitionend()");

    if (carouselInitComplete.value) {
      if (currentIndex.value === itemCount.value) {
        currentIndex.value = 1;
      } else {
        currentIndex.value++;
      }
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

    carouselInitComplete.value = true;

    carouselContent.value?.classList.remove("display-carousel-transition");
    carouselContent.value?.classList.remove("initialOffset");
    carouselContent.value?.classList.remove("nextTransition");
    carouselContent.value?.classList.add("noTransition");
    // carouselContent.value?.style.transform = null;
  };

  // const offsetToCentre = () => {
  //   carouselOuterWidth.value
  // };

  useResizeObserver(carouselOuter, (entries) => {
    const entry = entries[0];
    carouselInitComplete.value = false;
    const { width: carouselWidth } = entry.contentRect;
    carouselOuterWidth.value = carouselWidth;
    console.log(`carouselOuterWidth: `, carouselOuterWidth.value);
    // text.value = `width: ${width}, height: ${height}`

    carouselItemWidth.value = carouseItems.value[0].getBoundingClientRect().width;
    // console.log("carouseItems: ", carouseItems.value[0].getBoundingClientRect());
    console.log(`carouselItemWidth: `, carouselItemWidth.value);

    if (carouselItemWidth.value !== null) {
      fullScreenOffset.value = Math.floor(carouselItemWidth.value - (carouselOuterWidth.value - carouselItemWidth.value) / 2);
      // const translateX = carouselItemWidth.value - fullScreenOffset.value;
      console.log(`fullScreenOffset: `, fullScreenOffset.value);
      cssOngoinfOffset.value = `-${carouselItemWidth.value + fullScreenOffset.value}px`;

      carouselContent.value?.classList.remove("noTransition");
      carouselContent.value?.classList.add("display-carousel-transition");
      carouselContent.value?.classList.add("initialOffset");
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
        transform: translateX(v-bind(cssOngoinfOffset));
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
      }
    }
  }
</style>
