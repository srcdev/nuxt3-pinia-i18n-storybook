<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :fit-content="true" :apply-gutters="true" page-row-theme="theme-default" page-row-inner-theme="theme-default">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ t("lang-switcher.title") }}</h1>
            </div>
            <div>
              <LocaleSwitcher></LocaleSwitcher>
            </div>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";

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

  const { t } = useI18n();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
