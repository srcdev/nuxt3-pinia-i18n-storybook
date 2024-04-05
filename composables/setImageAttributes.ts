export function setImageAttributes(aspectRatio: Ref<number>) {
  const imgHeight = ref<number>(0);
  const imgHeightStr = ref<string>("0px");

  const imgWidth = ref<number>(0);
  const imgWidthStr = ref<string>("0px");

  const imgPropertiesReady = ref(false);

  const pixelStr = (value: number) => {
    return `${value}px`;
  };

  const imageContainerRef = customRef((track, trigger) => {
    let $imageContainerRef = <null | HTMLDivElement>null;
    return {
      get() {
        track();
        return $imageContainerRef;
      },
      set(value) {
        $imageContainerRef = value;
        trigger();
      }
    };
  });

  onMounted(async () => {
    await nextTick();

    await useSleep(150);

    if (imageContainerRef.value !== null) {
      // console.log("imageRef: ", imageContainerRef.value.getBoundingClientRect().height, imageContainerRef.value.getBoundingClientRect().width);

      // imgWidth.value = imageContainerRef.value.clientWidth;
      imgWidth.value = Math.floor(imageContainerRef.value.getBoundingClientRect().width);
      imgWidthStr.value = pixelStr(imgWidth.value);

      // imgHeight.value = imgWidth.value * aspectRatio.value;
      imgHeight.value = Math.floor(imageContainerRef.value.getBoundingClientRect().height);
      imgHeightStr.value = pixelStr(imgHeight.value);
      imgPropertiesReady.value = true;
    }
  });

  return {
    imageContainerRef,
    imgHeight,
    imgHeightStr,
    imgWidth,
    imgWidthStr,
    imgPropertiesReady
  };
}
