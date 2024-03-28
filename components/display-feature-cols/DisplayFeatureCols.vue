<template>
  <div class="display-feature-cols">
    <div class="col1">
      <slot name="col1"></slot>
    </div>
    <div class="col2" ref="imageContainerRef">
      <div class="col2-content">
        <LazyNuxtImg v-if="imgPropertiesReady" format="webp" :height="imgHeightStr" :width="imgWidthStr" :src="content.image.url" densities="x1" :alt="content.image.alt" class="image" />
      </div>
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
    content: {
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
  const aspectRatio = toRef(props.content.image.aspectRatio);
  const { imageContainerRef, imgPropertiesReady, imgHeightStr, imgWidthStr } = setImageAttributes(aspectRatio);
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .display-feature-cols {
    background-color: $color-white;
    display: grid;
    grid-gap: 12px;

    grid-template-columns: 1fr;

    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr [] minmax(v-bind(col2MinMax));
    }

    .col1 {
      background-color: $color-white;
      padding: 12px;
    }
    .col2 {
      aspect-ratio: 406 / 270;
      background-color: $color-red-3;

      &-content {
        aspect-ratio: 406 / 270;
        width: 100%;

        .image {
          aspect-ratio: 406 / 270;
          width: 100%;
        }
      }
    }
  }
</style>
