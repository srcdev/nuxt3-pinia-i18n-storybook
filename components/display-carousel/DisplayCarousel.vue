<template>
  <div class="display-carousel-outer">
    <div class="display-carousel" ref="carouselContent">
      <template v-for="n in itemCount">
        <div class="carouseI-items" :data-position="n" ref="carouseItems">Item {{ n }}</div>
      </template>
    </div>
  </div>

  <InputButton @click.prevent="goToNext()" variant="secondary" button-text="Move item" style-class-passthrough="move-button"></InputButton>
</template>

<script setup lang="ts">
  import { useEventListener } from "@vueuse/core";
  const props = defineProps({
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const carouselContent = ref<null | HTMLDivElement>(null);
  useEventListener(carouselContent, "transitionend", () => {
    transitionend();
  });
  const carouseItems = ref<any>([]);
  const currentIndex = ref(1);
  const itemCount = ref(5);

  const goToNext = () => {
    carouselContent.value.classList.add("display-carousel-transition");
    carouselContent.value.classList.add("nextTransition");
    carouselContent.value.classList.remove("noTransition");
  };

  const updateOrder = (index: number, order: number) => {
    carouseItems.value[index - 1].style.order = order;
  };

  const transitionend = () => {
    console.log("transitionend()");

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

    carouselContent.value.classList.remove("display-carousel-transition");
    carouselContent.value.classList.remove("nextTransition");
    carouselContent.value.classList.add("noTransition");
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .display {
    &-carousel {
      &-outer {
        overflow: hidden;
      }

      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;

      &.nextTransition {
        transform: translateX(-100%);
      }
      &.noTransition {
        transform: translateX(0);
      }

      &-transition {
        transition: transform 0.7s ease-in-out;
      }

      .carouseI-items {
        width: 100%;
        flex-shrink: 0;
        text-align: center;
        font-size: 20px;
        background-color: green;
      }
    }
  }
</style>
