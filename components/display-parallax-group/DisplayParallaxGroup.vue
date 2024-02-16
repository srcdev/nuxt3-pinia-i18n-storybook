<template>
  <section class="parallax">
    <div class="parallax-base">
      <div class="parallax-backdrop"></div>
    </div>

    <div class="parallax-foreground">
      <template v-if="hasSlotSidePanel">
        <slot name="sidePanel"></slot>
      </template>
      <template v-if="hasSlotComponent">
        <slot name="content"></slot>
      </template>
      <template v-if="hasSlotInfoRow">
        <slot name="infoRow"></slot>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  // import { computed, useSlots } from "vue";
  // import { useRootStore } from "@/stores/store.root";

  const { bgImage, bgHeight } = defineProps({
    hashId: {
      type: String,
      default: null
    },
    bgImage: {
      type: String,
      default: null
    },
    bgHeight: {
      type: String,
      default: "500px"
    },
    alignContent: {
      type: String,
      default: "center",
      validator: (val: string) => ["center", "top", "bottom"].includes(val)
    },
    justifyItems: {
      type: String,
      default: "left",
      validator: (val: string) => ["center", "left", "right"].includes(val)
    },
    styleClassPassthrough: {
      type: String as PropType<String>,
      default: ""
    }
  });

  // const rootStore = useRootStore();

  const slots = useSlots();
  const hasSlotComponent = computed(() => slots.content !== undefined);
  const hasSlotSidePanel = computed(() => slots.sidePanel !== undefined);
  const hasSlotInfoRow = computed(() => slots.infoRow !== undefined);

  const backgroundImage = computed(() => `url("${bgImage}")`);
  // const useFixedBg = computed(() => !rootStore.isIos);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  $backgroundImage: v-bind(backgroundImage);
  $bgHeight: v-bind(bgHeight);

  .parallax {
    aspect-ratio: 6/3;
    position: relative;
    &-base {
      clip: rect(0, auto, auto, 0);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-backdrop {
      position: fixed;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateZ(0);
      will-change: transform;

      background-image: $backgroundImage;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    &-foreground {
    }
  }
  // .parallax__layer--back {
  // }

  // .parallax__layer {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  // }

  // .parallax__layer--front {
  //   transform: translateZ(90px) scale(0.7);
  //   z-index: 4;
  // }
</style>
