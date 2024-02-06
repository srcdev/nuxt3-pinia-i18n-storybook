<template>
  <div class="masonry-grid-wrapper" ref="gridWrapper">
    <slot v-if="hasSlotComponent" name="content"></slot>
  </div>
</template>

<script setup lang="ts">
  import { useElementSize } from "@vueuse/core";

  const props = defineProps({
    minTileWidth: {
      type: Number,
      default: 312,
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
    mobilePreferredColCount: {
      type: Number,
      default: 1,
    },
    smTabletPreferredColCount: {
      type: Number,
      default: 3,
    },
    fixedWidth: {
      type: Boolean,
      default: false,
    },
  });

  const slots = useSlots();
  const hasSlotComponent = computed(() => slots.content !== undefined);

  const gridWrapper = ref<HTMLDivElement | null>(null);
  const { width } = useElementSize(gridWrapper);
  const columnCount = computed(() => {
    return Math.floor(width.value / props.minTileWidth);
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  // $colCount: v-bind($columnCount);

  .masonry-grid {
    $self: &;
    &-wrapper {
      column-count: v-bind(columnCount);

      // @media only screen and (min-width: $tabletSmall) {
      //   column-count: v-bind(smTabletPreferredColCount);
      // }

      column-gap: 10px;

      :deep(#{ $self }-item) {
        margin: 0;
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
