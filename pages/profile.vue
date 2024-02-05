<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <div class="pt-32">
              <h1 class="text-header-large">Profile page</h1>
            </div>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false,
    middleware: ["auth"],
  });

  useHead({
    title: "Profile page",
    meta: [{ name: "description", content: "Profile page" }],
    bodyAttrs: {
      class: "",
    },
  });
</script>

<style lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
