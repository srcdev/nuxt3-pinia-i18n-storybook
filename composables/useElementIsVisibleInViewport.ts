import { customRef, onMounted, onBeforeUnmount } from "vue";

const useElementIsVisibleInViewport = () => {
  let allowPartiallyVisible = <boolean>false;
  const visibilityRef = customRef((track, trigger) => {
    let $visibilityRef = <null | HTMLElement>null;
    return {
      get() {
        track();
        return $visibilityRef;
      },
      set(value) {
        $visibilityRef = value;
        trigger();
      },
    };
  });

  const checkElementIsVisibleInViewport = () => {
    const { top, left, bottom, right } = visibilityRef.value?.getBoundingClientRect() as DOMRect;
    const { innerHeight, innerWidth } = window;
    return allowPartiallyVisible
      ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

  const handleVisibility = (partiallyVisible: boolean | any = false) => {
    allowPartiallyVisible = partiallyVisible;
    if (checkElementIsVisibleInViewport()) {
      visibilityRef.value?.classList.remove("scroll-reveal");
    } else if (!visibilityRef.value?.classList.contains("scroll-reveal")) {
      visibilityRef.value?.classList.add("scroll-reveal");
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleVisibility);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleVisibility);
  });

  return {
    visibilityRef,
    handleVisibility,
  };
};

export default useElementIsVisibleInViewport;
