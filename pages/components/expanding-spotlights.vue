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
            <DisplayExpandingSpotlights v-if="hasData" style-class-passthrough="pb-20 pt-20" type="gallery" :data="galleryData" />
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IGalleryBasic } from "@/types/types.gallery";
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

  const hasData = ref(false);
  const { data: galleryData, pending, status, error, refresh } = await useFetch<IGalleryBasic>("/api/gallery/basic");
  if (status.value === "success") {
    hasData.value = true;
  }
</script>
