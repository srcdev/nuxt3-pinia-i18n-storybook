<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :fit-content="true" :apply-gutters="true" page-row-theme="theme-default" page-row-inner-theme="theme-default">
          <template #pageRowContent>
            <LocaleSwitcher></LocaleSwitcher>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false,
  });

  useHead({
    title: "Home page",
    meta: [{ name: "description", content: "Desciption meta tag content" }],
    bodyAttrs: {
      class: "",
    },
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
