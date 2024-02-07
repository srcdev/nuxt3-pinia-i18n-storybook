<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-default" style-class-passthrough="pt-20">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ $t("pages.language-switcher.header") }}</h1>
            </div>
          </template>
        </PageRow>

        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-default" style-class-passthrough="pb-20">
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
