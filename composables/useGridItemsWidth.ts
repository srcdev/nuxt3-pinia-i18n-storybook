import { useBreakpoints, useElementSize, useResizeObserver } from "@vueuse/core";
import type { IResponsiveWidths } from "@/types/types.responsiveWidths";

export const useGridItemsWidth = (minWidth: number, useResponsiveWidths: boolean, responsiveWidths: IResponsiveWidths, fixedWidth: boolean, gap: number) => {
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

  const gridWrapper = customRef((track, trigger) => {
    let $gridWrapper = <null | HTMLDivElement>null;
    return {
      get() {
        track();
        return $gridWrapper;
      },
      set(value) {
        $gridWrapper = value;
        trigger();
      }
    };
  });

  const minTileWidth = customRef((track, trigger) => {
    let $minTileWidth = <number>minWidth;
    return {
      get() {
        track();
        return $minTileWidth;
      },
      set(value) {
        $minTileWidth = value;
        trigger();
      }
    };
  });

  const minTileWidthStr = computed(() => {
    return minTileWidth.value + "px";
  });

  const maxTileWidthStr = computed(() => {
    return fixedWidth ? minTileWidth.value + "px" : "1fr";
  });

  const gridWrapperWidth = computed(() => {
    return fixedWidth ? "100%" : "auto";
  });

  const gapNum = ref(gap);
  const gapStr = ref(gap + "px");

  const { width } = useElementSize(gridWrapper);
  const columnCount = computed(() => {
    return Math.floor(width.value / minTileWidth.value);
  });

  const calcMinTileWidth = () => {
    if (isMobile.value) {
      minTileWidth.value = Number(responsiveWidths["mobile"].replace("px", ""));
    } else if (isTablet.value) {
      minTileWidth.value = Number(responsiveWidths["tablet"].replace("px", ""));
    } else if (isLaptop.value) {
      minTileWidth.value = Number(responsiveWidths["laptop"].replace("px", ""));
    } else if (isDesktop.value) {
      minTileWidth.value = Number(responsiveWidths["desktop"].replace("px", ""));
    }
  };

  useResizeObserver(gridWrapper, (entries) => {
    if (useResponsiveWidths) {
      calcMinTileWidth();
    }
  });

  return {
    gridWrapper,
    gridWrapperWidth,
    minTileWidth,
    minTileWidthStr,
    maxTileWidthStr,
    gapNum,
    gapStr
  };
};
