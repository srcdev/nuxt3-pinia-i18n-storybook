<template>
  <div class="display-expander-spotlights" :class="[styleClassPassthrough]">
    <template v-if="type === 'gallery' && data.total > 0">
      <div v-for="item in data.items" class="spotlight">
        <img :src="item.url" :alt="item.alt" class="spotlight-inner" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { IGalleryBasic } from "@/types/types.gallery";

  const props = defineProps({
    type: {
      type: String,
      required: true,
    },
    data: {
      type: Object as PropType<IGalleryBasic>,
      default: <IGalleryBasic>{
        items: [],
        total: 0,
        skip: 0,
        limit: 10,
      },
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  :root {
    --background: #f8f8ff;
  }

  // * {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }

  // body {
  //   background-color: var(--background);
  //   display: grid;
  //   place-items: center;
  //   height: 100vh;
  // }

  .display-expander-spotlights {
    display: flex;
    gap: 1rem;
    max-width: 80rem;

    .spotlight {
      position: relative;
      left: 0px;
      width: 6rem;
      border-radius: 1.2rem;
      height: 20rem;
      overflow: hidden;
      background-color: var(--background);
      transition: 0.4s ease-in-out;
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
      flex: 0.25;

      &:hover {
        flex: 2;
        font-weight: bold;
        cursor: pointer;
        border-radius: 1rem;

        @media only screen and (min-width: 768px) {
          flex: 0.85;
        }

        @media only screen and (min-width: 1024px) {
          flex: 0.62;
        }
      }

      &-inner {
        position: relative;
        height: 20rem;
        object-fit: cover;
      }
    }
  }

  // .card img {
  //   position: relative;
  //   height: 20rem;
  //   object-fit: cover;
  // }

  // .card:hover {
  //   flex: 2;
  //   font-weight: bold;
  //   cursor: pointer;
  //   border-radius: 1rem;

  //   @media only screen and (min-width: 768px) {
  //     flex: 0.85;
  //   }

  //   @media only screen and (min-width: 1024px) {
  //     flex: 0.62;
  //   }
  // }

  /* polish images center */
  // .card:nth-child(1) img {
  //   left: -8rem;
  // }

  // .card:nth-child(2) img {
  //   left: -6rem;
  // }

  // .card:nth-child(3) img {
  //   left: -14rem;
  // }

  // .card:nth-child(4) img {
  //   left: -8rem;
  // }
</style>
