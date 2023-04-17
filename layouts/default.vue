<template>
  <div class="page-wrapper">
    <Header></Header>
    <div class="page-content">
      <slot name="content"></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/functional/header/Header.vue";
import Footer from "@/components/functional/footer/Footer.vue";

</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";

.page {
  &-wrapper {
    min-height: 100vh;
  }
  &-content {
    min-height: 100vh;
  }
}
</style>
