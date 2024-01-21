<template>
  <div class="gallery" :class="[styleClassPassthrough]">
    <div class="card">
      <img src="/assets/images/spotlights/lakeview-elegance.png" alt="Lakeview Elegance preview" />
    </div>
    <div class="card">
      <img src="/assets/images/spotlights/skyline-oasis.png" alt="Skyline Oasis preview" />
    </div>
    <div class="card">
      <img src="/assets/images/spotlights/vista-paradiso.png" alt="Vista Paradiso preview" />
    </div>
    <div class="card">
      <img src="/assets/images/spotlights/villa-verde.png" alt="Villa Verde preview" />
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

  .gallery {
    display: flex;
    gap: 1rem;
    max-width: 80rem;
  }

  .card {
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
  }

  .card img {
    position: relative;
    height: 20rem;
    object-fit: cover;
  }

  .card:hover {
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
