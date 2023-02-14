<template>
  <div class="page-wrapper">
    <Header></Header>
    <div class="content-wrapper">
      <slot name="layout-content"></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/functional/footer/Footer.vue";
import Header from "@/components/functional/header/Header.vue";
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";

.page {
  &-wrapper {
    background-color: white;
  }
}

.content {
  &-wrapper {
    padding: 12px;
  }
}
</style>
