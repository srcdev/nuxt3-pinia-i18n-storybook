<template>
  <div :class="pageTheme">
    <Header :header-theme="headerTheme"></Header>

    <PageRow :use-available-width="true">
      <template #pageRowContent>
        <slot name="layout-content"></slot>
      </template>
    </PageRow>

    <PageRow :use-available-width="true">
      <template #pageRowContent>
        <Footer :footer-theme="footerTheme"></Footer>
      </template>
    </PageRow>
  </div>
</template>

<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: "body-default"
    }
  });

  defineProps({
    pageTheme: {
      type: String,
      default: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green"].includes(val as string)
    },
    footerTheme: {
      type: String,
      default: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green"].includes(val as string)
    },
    headerTheme: {
      type: String,
      default: "header-default",
      validator: (val) => ["header-default", "header-dark"].includes(val as string)
    }
  });
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
