<template>
  <div class="masonry-grid-wrapper">
    <slot v-if="hasSlotComponent" name="content"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    minTileWidth: {
      type: String,
      default: "312px",
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
    mobilePreferredColCount: {
      type: Number,
      default: 2,
    },
    smTabletPreferredColCount: {
      type: Number,
      default: 4,
    },
  });

  const slots = useSlots();
  const hasSlotComponent = computed(() => slots.content !== undefined);
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .masonry-grid {
    &-wrapper {
      column-count: v-bind(mobilePreferredColCount);

      @media only screen and (min-width: $tabletSmall) {
        column-count: v-bind(smTabletPreferredColCount);
      }

      column-gap: 10px;
    }
  }

  // img {
  //   max-width: 100%;
  //   display: block;
  // }

  // figure {
  //   margin: 0;
  //   display: grid;
  //   grid-template-rows: 1fr auto;
  //   margin-bottom: 10px;
  //   break-inside: avoid;
  // }

  // figure > img {
  //   grid-row: 1 / -1;
  //   grid-column: 1;
  // }

  // figure a {
  //   color: black;
  //   text-decoration: none;
  // }

  // figcaption {
  //   grid-row: 2;
  //   grid-column: 1;
  //   background-color: rgba(255, 255, 255, 0.5);
  //   padding: 0.2em 0.5em;
  //   justify-self: start;
  // }

  // .container {
  //   column-count: 4;
  //   column-gap: 10px;
  // }
</style>
