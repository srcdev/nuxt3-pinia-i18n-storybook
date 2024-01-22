<template>
  <div class="display-expander-spotlights" :class="[styleClassPassthrough]">
    <div class="spotlight">
      <img src="/assets/images/spotlights/lakeview-elegance.jpg" alt="Lakeview Elegance preview" class="spotlight-inner" />
    </div>
    <div class="spotlight">
      <img src="/assets/images/spotlights/skyline-oasis.jpg" alt="Skyline Oasis preview" class="spotlight-inner" />
    </div>
    <div class="spotlight">
      <img src="/assets/images/spotlights/vista-paradiso.jpg" alt="Vista Paradiso preview" class="spotlight-inner" />
    </div>
    <div class="spotlight">
      <img src="/assets/images/spotlights/villa-verde.jpg" alt="Villa Verde preview" class="spotlight-inner" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
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
