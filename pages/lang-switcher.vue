<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20">
          <template #default>
            <div>
              <h1 class="text-header-large">{{ $t("pages.language-switcher.header") }}</h1>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pb-20">
          <template #default>
            <LocaleSwitcher></LocaleSwitcher>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false,
    middleware: "auth"
  });

  useHead({
    title: "Home page",
    meta: [{ name: "description", content: "Desciption meta tag content" }],
    bodyAttrs: {
      class: ""
    }
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
