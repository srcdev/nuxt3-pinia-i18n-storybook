<template>
  <div class="page-layout" :class="pageTheme">
    <Header :header-theme="headerTheme"></Header>

    <DisplayRow :use-available-width="true">
      <template #default>
        <slot name="layout-content"></slot>
      </template>
    </DisplayRow>

    <Footer :footer-theme="footerTheme"></Footer>
  </div>
</template>

<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: "body-default",
      id: "body"
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
      default: "header-dark",
      validator: (val) => ["header-default", "header-dark"].includes(val as string)
    }
  });
</script>

<style>
  .page-layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
