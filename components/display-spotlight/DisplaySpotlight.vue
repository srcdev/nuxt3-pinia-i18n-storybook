<template>
  <div class="display-spotlight">
    <div class="display-spotlight-inner">
      <div class="box display-spotlight-title">
        <span class="display-spotlight-title-inner">{{ alt }}</span>
      </div>
      <div class="box display-spotlight-image">
        <div class="box display-spotlight-image-inner" ref="imageContainerRef">
          <LazyNuxtImg v-if="imgPropertiesReady" format="webp" :src="url" :alt="alt" :height="imgHeightStr" :width="imgWidthStr" densities="x1" />
        </div>
      </div>
      <div class="box display-spotlight-more-info">
        <span class="display-spotlight-more-info-inner">More info &raquo;</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    alt: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const aspectRatio = ref(4 / 3);
  const { imageContainerRef, imgPropertiesReady, imgHeightStr, imgWidthStr } = setImageAttributes(aspectRatio);
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .display-spotlight {
    aspect-ratio: v-bind(aspectRatio);
    background-color: var(--white);
    border: 1px solid var(--color-orange-5);
    // border-radius: 10px;
    overflow: hidden;

    &-inner {
      overflow: hidden;

      display: grid;
      grid-template-columns: repeat(5, [col] auto);
      grid-template-rows: repeat(3, [row] auto);
      background-color: var(--white);
      color: #444;

      .box {
        overflow: hidden;
      }
    }

    &-title {
      color: var(--white);
      text-align: right;
      transform: rotate(180deg);
      writing-mode: vertical-lr;
      height: 100%;
      line-height: unset;
      padding: 0;
      width: fit-content;
      z-index: 10;

      grid-column: col;
      grid-row: row / span 3;

      &-inner {
        font-size: 1.6rem;
        font-variation-settings: "wght" 600;
        display: block;
        background-color: #00000080;
        padding: 12px 8px 12px 12px;
        // border-bottom-right-radius: 9px;
        // border-bottom-left-radius: 0;
        // border-top-right-radius: 9px;
        // border-top-left-radius: 0;
        margin: 1px;
        border: 1px solid #000;
        letter-spacing: 1.5px;
      }
    }

    &-image {
      // border-radius: 2px;
      grid-column: col / span 5;
      grid-row: row / span 3;
      overflow: hidden;

      &-inner {
        aspect-ratio: v-bind(aspectRatio);
        // border-radius: 2px;
        overflow: hidden;
      }

      img {
        aspect-ratio: v-bind(aspectRatio);
        object-fit: cover;
        transition: all linear 200ms;

        // following added to maintain aspect ratio
        height: 100%;
        width: 100%;
      }
    }

    &-more-info {
      grid-column: col 4 / span 2;
      grid-row: row 3;

      border: 1px solid #bc652f;
      color: var(--white);
      // border-top-left-radius: 9px;
      // border-bottom-right-radius: 9px;
      display: block;
      background-color: #bc652f75;
      padding: 8px;
      transform: translate3d(-1px, -1px, 0);

      &-inner {
        font-size: 1.4rem;
        font-variation-settings: "wght" 700;
      }
    }
  }
</style>
