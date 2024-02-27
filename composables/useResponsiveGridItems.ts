import { useBreakpoints, useResizeObserver } from "@vueuse/core";
import type { IResponsiveWidths } from "@/types/types.responsiveWidths";

const useResponsiveGridItems = (displayCount: any) => {
  const responsiveWidths = ref<IResponsiveWidths>({
    mobile: "120px",
    tablet: "200px",
    laptop: "240px",
    desktop: "280px"
  });

  console.log(responsiveWidths.value);

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
  console.log(gridWrapper);

  // const displayCount = toRef(() => propsDisplayCount);
  console.log(displayCount);

  // const breakpoints = useBreakpoints({
  //   mobile: 0,
  //   tablet: 768,
  //   laptop: 1024,
  //   desktop: 1280
  // });
  // const isMobile = breakpoints.smaller("tablet");
  // const isTablet = breakpoints.between("tablet", "laptop");
  // const isLaptop = breakpoints.between("laptop", "desktop");
  // const isDesktop = breakpoints.greater("desktop");

  // const responsiveWidthMobile = responsiveWidths.value.mobile;
  // const responsiveWidthTablet = responsiveWidths.value.tablet;
  // const responsiveWidthLaptop = responsiveWidths.value.laptop;
  // const responsiveWidthDesktop = responsiveWidths.value.desktop;

  // const maxTileWidth = computed(() => {
  //   return fixedWidth.value ? minTileWidth.value + "px" : "1fr";
  // });

  // const updateMinTileWidth = () => {
  //   if (isMobile.value) {
  //     minTileWidth.value = Number(responsiveWidths.value["mobile"].replace("px", ""));
  //   } else if (isTablet.value) {
  //     minTileWidth.value = Number(responsiveWidths.value["tablet"].replace("px", ""));
  //   } else if (isLaptop.value) {
  //     minTileWidth.value = Number(responsiveWidths.value["laptop"].replace("px", ""));
  //   } else if (isDesktop.value) {
  //     minTileWidth.value = Number(responsiveWidths.value["desktop"].replace("px", ""));
  //   }
  // };

  // onMounted(() => {
  //   updateMinTileWidth();
  // });

  // useResizeObserver(gridWrapper, () => {
  //   updateMinTileWidth();
  // });

  // watch(
  //   () => fixedWidth.value,
  //   () => {
  //     updateMinTileWidth();
  //   }
  // );

  watch(
    () => displayCount,
    () => {
      console.log("displayCount: UPDATED");
      // updateMinTileWidth();
    }
  );

  return {
    gridWrapper,
    responsiveWidths
    // responsiveWidthMobile,
    // responsiveWidthTablet,
    // responsiveWidthLaptop,
    // responsiveWidthDesktop
  };
};
export default useResponsiveGridItems;
