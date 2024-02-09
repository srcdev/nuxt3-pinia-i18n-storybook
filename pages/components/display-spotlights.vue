<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <ClientOnly>
          <PageRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
            <template #pageRowContent>
              <h1 class="text-header-large">Display Feature Spotlights</h1>
              <p class="text-normal wght-700">(WIP) Not currently responsive</p>

              <template v-if="status === 'idle'">
                <div>
                  <InputButton @click="execute()" type="button" variant="primary" button-text="Get data" size="medium" style-class-passthrough="mt-12 mb-12" />
                </div>
              </template>
              <template v-if="status === 'success'">
                <DisplaySpotlight style-class-passthrough="pb-20 pt-20" type="gallery" :data="spotlightsData ?? {}" />
              </template>
              <template v-if="status === 'pending'">
                <p class="text-normal wght-700">&hellip; Loading</p>
              </template>
            </template>
          </PageRow>
        </ClientOnly>
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

  const {
    data: spotlightsData,
    execute,
    status,
    pending,
    error,
    refresh,
  } = await useFetch<IGalleryBasic>("/api/spotlights", {
    immediate: true,
  });
</script>
