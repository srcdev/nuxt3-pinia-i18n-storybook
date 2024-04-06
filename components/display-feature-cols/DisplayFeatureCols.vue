<template>
  <div class="display-feature-cols">
    <div class="header">
      <p class="text-normal wght-700">This is the title bar</p>
    </div>
    <div class="col1">
      <slot name="col1"></slot>
    </div>
    <div class="col2" ref="imageContainerRef">
      <LazyNuxtImg v-if="imgPropertiesReady" format="webp" :height="imgHeightStr" :width="imgWidthStr" :src="imageData.image.url" densities="x1" :alt="imageData.image.alt" class="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface IImageData {
    image: {
      alt: string;
      url: string;
      aspectRatio: number;
    };
  }
  const props = defineProps({
    imageData: {
      type: Object as PropType<IImageData>,
      required: true,
      default: () => ({})
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const col2MinMax = ref("250px, 350px");
  // const aspectRatio = toRef(props.imageData.image.aspectRatio);
  const aspectRatio = ref(4 / 3);
  const { imageContainerRef, imgPropertiesReady, imgHeightStr, imgWidthStr } = setImageAttributes(aspectRatio);
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .display-feature-cols {
    background-color: var(--color-white);
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 12px;

    @media only screen and (min-width: 768px) {
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr [] minmax(v-bind(col2MinMax));

      .header {
        grid-column: 1;
        grid-row: 1;
      }
      .col1 {
        grid-column: 1;
        grid-row: 2;
      }
      .col2 {
        grid-column: 2;
        grid-row: 1 / span 2;
      }
    }

    .col1 {
      background-color: var(--color-white);
    }
    .col2 {
      aspect-ratio: v-bind(aspectRatio);

      .image {
        aspect-ratio: v-bind(aspectRatio);
        width: 100%;
        object-fit: cover;
      }

      // &-content {
      //   aspect-ratio: v-bind(aspectRatio);
      //   width: 100%;

      //   .image {
      //     aspect-ratio: v-bind(aspectRatio);
      //     width: 100%;
      //     object-fit: cover;
      //   }
      // }
    }
  }
</style>
