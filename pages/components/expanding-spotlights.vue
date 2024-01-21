<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">Expanding Spotlights Example</h1>
            </div>
          </template>
        </PageRow>
        <PageRow :use-available-width="false" :apply-gutters="true" style-class-passthrough="pb-20 pt-20">
          <template #pageRowContent>
            <h1 class="text-header-medium">Display Expanding Spotlights</h1>
            <DisplayExpandingSpotlights style-class-passthrough="pb-20 pt-20" />
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
    title: "Display Expanding Spotlights",
    meta: [{ name: "description", content: "Display Expanding Spotlights" }],
    bodyAttrs: {
      class: "",
    },
  });
</script>
