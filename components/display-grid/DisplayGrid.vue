<template>
  <div class="display-grid-wrapper" :class="[colRepeatType, styleClassPassthrough, { 'fixed-width': fixedWidth }]" ref="gridWrapper">
    <slot v-if="hasSlotComponent" name="content"></slot>
  </div>
</template>

<script setup lang="ts">
  import { useBreakpoints, useResizeObserver } from "@vueuse/core";
  import type { IResponsiveWidths } from "@/types/types.responsiveWidths";

  const props = defineProps({
    minTileWidth: {
      type: Number,
      default: 312
    },
    responsiveWidths: {
      type: Object as PropType<IResponsiveWidths>,
      default: () => ({
        mobile: "280px",
        tablet: "240px",
        laptop: "240px",
        desktop: "320px"
      })
    },
    colRepeatType: {
      type: String,
      default: "auto-fit",
      validator: (val) => ["auto-fit", "auto-fill"].includes(val as string)
    },
    alignHeights: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    },
    displayCount: {
      type: Number,
      default: 1
    }
  });

  const slots = useSlots();
  const hasSlotComponent = computed(() => slots.content !== undefined);
  const gridWrapper = ref<null | HTMLDivElement>(null);
  const displayCount = toRef(() => props.displayCount);

  const breakpoints = useBreakpoints({
    mobile: 0,
    tablet: 768,
    laptop: 1024,
    desktop: 1280
  });
  const isMobile = breakpoints.smaller("tablet");
  const isTablet = breakpoints.between("tablet", "laptop");
  const isLaptop = breakpoints.between("laptop", "desktop");
  const isDesktop = breakpoints.greater("desktop");

  const responsiveWidths = toRef(() => props.responsiveWidths);
  const responsiveWidthMobile = responsiveWidths.value.mobile;
  const responsiveWidthTablet = responsiveWidths.value.tablet;
  const responsiveWidthLaptop = responsiveWidths.value.laptop;
  const responsiveWidthDesktop = responsiveWidths.value.desktop;

  const minTileWidth = ref(props.minTileWidth);

  const fixedWidth = toRef(() => props.fixedWidth);

  const maxTileWidth = computed(() => {
    return fixedWidth.value ? minTileWidth.value + "px" : "1fr";
  });

  const updateMinTileWidth = () => {
    if (isMobile.value) {
      minTileWidth.value = Number(responsiveWidths.value["mobile"].replace("px", ""));
    } else if (isTablet.value) {
      minTileWidth.value = Number(responsiveWidths.value["tablet"].replace("px", ""));
    } else if (isLaptop.value) {
      minTileWidth.value = Number(responsiveWidths.value["laptop"].replace("px", ""));
    } else if (isDesktop.value) {
      minTileWidth.value = Number(responsiveWidths.value["desktop"].replace("px", ""));
    }
  };

  onMounted(() => {
    updateMinTileWidth();
  });

  useResizeObserver(gridWrapper, () => {
    updateMinTileWidth();
  });

  watch(
    () => fixedWidth.value,
    () => {
      updateMinTileWidth();
    }
  );

  watch(
    () => displayCount.value,
    () => {
      updateMinTileWidth();
    }
  );
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .display-grid {
    $self: &;
    &-wrapper {
      display: grid;
      grid-gap: 12px;
      &.auto-fit {
        grid-template-columns: repeat(auto-fit, minmax(v-bind(responsiveWidthMobile), v-bind(maxTileWidth)));

        // @media only screen and (min-width: 640px) {
        //   grid-template-columns: repeat(auto-fit, minmax(v-bind(responsiveWidthTablet), v-bind(maxTileWidth)));
        // }

        // @media only screen and (min-width: 1024px) {
        //   grid-template-columns: repeat(auto-fit, minmax(v-bind(responsiveWidthLaptop), v-bind(maxTileWidth)));
        // }

        // @media only screen and (min-width: 1280px) {
        //   grid-template-columns: repeat(auto-fit, minmax(v-bind(responsiveWidthDesktop), v-bind(maxTileWidth)));
        // }
      }
      &.auto-fill {
        grid-template-columns: repeat(auto-fill, minmax(v-bind(responsiveWidthMobile), v-bind(maxTileWidth)));

        // @media only screen and (min-width: 640px) {
        //   grid-template-columns: repeat(auto-fill, minmax(v-bind(responsiveWidthTablet), v-bind(maxTileWidth)));
        // }

        // @media only screen and (min-width: 1024px) {
        //   grid-template-columns: repeat(auto-fill, minmax(v-bind(responsiveWidthLaptop), v-bind(maxTileWidth)));
        // }

        // @media only screen and (min-width: 1280px) {
        //   grid-template-columns: repeat(auto-fill, minmax(v-bind(responsiveWidthDesktop), v-bind(maxTileWidth)));
        // }
      }

      &.fixed-width {
        &.auto-fit,
        &.auto-fill {
          grid-template-columns: repeat(2, minmax(v-bind(responsiveWidthMobile), v-bind(maxTileWidth)));

          @media only screen and (min-width: 640px) {
            grid-template-columns: repeat(3, minmax(v-bind(responsiveWidthTablet), v-bind(maxTileWidth)));
          }

          @media only screen and (min-width: 1024px) {
            grid-template-columns: repeat(3, minmax(v-bind(responsiveWidthLaptop), v-bind(maxTileWidth)));
          }

          @media only screen and (min-width: 1280px) {
            grid-template-columns: repeat(4, minmax(v-bind(responsiveWidthDesktop), v-bind(maxTileWidth)));
          }
        }
      }

      :deep(#{ $self }-item) {
        transition: all ease-in-out 300ms;

        &.scroll-reveal {
          opacity: 0;
          transform: translateY(75px);
        }
      }
    }
  }
</style>
