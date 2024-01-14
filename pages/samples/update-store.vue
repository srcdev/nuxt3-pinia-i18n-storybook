<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="true" :apply-gutters="true">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ $t("pages.samples.update-store.header") }}</h1>
            </div>
          </template>
        </PageRow>

        <PageRow :use-available-width="true" :apply-gutters="true" page-row-theme="theme-default" page-row-inner-theme="theme-default">
          <template #pageRowContent>
            <ArrayActions
              :sb-array-item="{
                name: 'Name D',
                description: 'Description D',
              }"
            ></ArrayActions>
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
    title: "Update Store Examples",
    meta: [{ name: "description", content: "" }],
    bodyAttrs: {
      class: "",
    },
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
