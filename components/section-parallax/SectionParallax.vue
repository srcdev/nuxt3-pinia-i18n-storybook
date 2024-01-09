<template>
  <section :class="['section-parallax', styleClassPassthrough, { 'has-info-row': hasSlotInfoRow }, { 'has-slot-side-panel': hasSlotSidePanel }, { 'use-fixed-bg': useFixedBg }]" :align-content="`${alignContent}-${justifyItems}`" :id="hashId">
    <template v-if="hasSlotSidePanel">
      <slot name="sidePanel"></slot>
    </template>
    <template v-if="hasSlotComponent">
      <slot name="content"></slot>
    </template>
    <template v-if="hasSlotInfoRow">
      <slot name="infoRow"></slot>
    </template>
  </section>
</template>

<script setup lang="ts">
  import { computed, useSlots } from "vue";
  import { useRootStore } from "@/stores/store.root";

  const { bgImage, bgHeight } = defineProps({
    hashId: {
      type: String,
      default: null,
    },
    bgImage: {
      type: String,
      default: null,
    },
    bgHeight: {
      type: String,
      default: "500px",
    },
    alignContent: {
      type: String,
      default: "center",
      validator: (val: string) => ["center", "top", "bottom"].includes(val),
    },
    justifyItems: {
      type: String,
      default: "left",
      validator: (val: string) => ["center", "left", "right"].includes(val),
    },
    styleClassPassthrough: {
      type: String as PropType<String>,
      default: "",
    },
  });

  const rootStore = useRootStore();

  const slots = useSlots();
  const hasSlotComponent = computed(() => slots.content !== undefined);
  const hasSlotSidePanel = computed(() => slots.sidePanel !== undefined);
  const hasSlotInfoRow = computed(() => slots.infoRow !== undefined);

  const backgroundImage = computed(() => `url("${bgImage}")`);
  const useFixedBg = computed(() => !rootStore.isIos);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  $backgroundImage: v-bind(backgroundImage);
  $bgHeight: v-bind(bgHeight);

  .section-parallax {
    // min-height: 120vh;
    background-image: $backgroundImage;
    background-position: center;
    background-repeat: no-repeat;
    background-size: inherit;
    position: relative;

    &.use-fixed-bg {
      background-attachment: fixed;
      background-size: cover;
      // min-height: 120vh;
    }

    &.has-info-row {
      // padding-bottom: 200px;
    }

    @media only screen and (min-width: $tabletSmall) {
      &.has-info-row {
        // padding-bottom: 0;
      }
      min-height: 75vh;
    }
    @media only screen and (min-width: $tabletLarge) {
      // min-height: 85vh;
    }
    @media only screen and (min-width: $desktop) {
      // min-height: 100vh;
    }

    // display: flex;
    // align-items: center;

    // &.left {
    //   justify-content: flex-start;
    // }

    // &.center {
    //   justify-content: center;
    // }

    // &.right {
    //   justify-content: flex-end;
    // }
  }
</style>
