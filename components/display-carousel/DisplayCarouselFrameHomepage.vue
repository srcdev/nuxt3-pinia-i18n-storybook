<template>
  <div class="display-carousel-frame-homepage">
    <div class="display-carousel-frame-homepage-inner">
      <div class="box display-carousel-frame-homepage-title">
        <span class="display-carousel-frame-homepage-title-inner">{{ alt }}</span>
      </div>
      <div class="box display-carousel-frame-homepage-image">
        <div class="box display-carousel-frame-homepage-image-inner">
          <NuxtImg :src="url" :alt="alt" class="image" />
        </div>
      </div>
      <div class="box display-carousel-frame-homepage-more-info">
        <span class="display-carousel-frame-homepage-more-info-inner">More info &raquo;</span>
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
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .display-carousel-frame-homepage {
    background-color: var(--white);
    border: 1px solid var(--color-grey-3);
    overflow: hidden;
    width: 100%;

    &-inner {
      aspect-ratio: 1456 / 816;
      overflow: hidden;
      // position: relative;

      display: grid;
      // grid-template-columns: repeat(5, [col] 20%);
      grid-template-columns: repeat(5, [col] auto);
      // grid-template-columns: 0 repeat(4, [col] auto);
      grid-template-rows: repeat(3, [row] auto);
      background-color: var(--white);
      color: #444;

      .box {
        overflow: hidden;
      }
    }

    &-title {
      // position: absolute;
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
        margin: 16px;
        outline: 1px solid #000;
        border: 1px solid var(--white);

        letter-spacing: 1.5px;
      }
    }

    &-image {
      grid-column: col / span 5;
      grid-row: row / span 3;
      overflow: hidden;

      &-inner {
        overflow: hidden;
      }

      .image {
        width: 100%;
        transition: all linear 200ms;
        object-fit: cover;

        &:hover {
          // width: 120%;
          // transform: scale(1.1);
        }
      }
    }

    &-more-info {
      grid-column: col 4 / span 2;
      grid-row: row 3;
      outline: 1px solid #000;
      border: 1px solid var(--white);
      color: var(--white);
      display: block;
      background-color: #00000080;
      padding: 8px;
      transform: translate3d(-6px, -6px, 0);

      &-inner {
        font-size: 1.4rem;
        font-variation-settings: "wght" 700;
      }
    }
  }
</style>
