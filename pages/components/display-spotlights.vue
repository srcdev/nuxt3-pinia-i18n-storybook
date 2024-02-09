<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #pageRowContent>
            <h1 class="text-header-large">Display Feature Spotlights</h1>
            <p class="text-normal wght-700">(WIP) Not currently responsive</p>

            <template v-if="status === 'idle'">
              <div>
                <InputButton @click="execute()" type="button" variant="primary" button-text="Get data" size="medium" style-class-passthrough="mt-12 mb-12" />
              </div>
            </template>
            <template v-if="status === 'success'"> Loaded </template>
            <template v-if="status === 'pending'">
              <p class="text-normal wght-700">&hellip; Loading</p>
            </template>
          </template>
        </PageRow>

        <PageRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #pageRowContent>
            <ClientOnly>
              <MasonryGrid v-if="!pending" :min-tile-width="300">
                <template #content>
                  <MasonryGridItem v-for="item in spotlightsData?.items" :use-scroll-reveal="false">
                    <template #content>
                      <DisplaySpotlight :alt="item.alt" :url="item.url" />
                    </template>
                  </MasonryGridItem>
                </template>
              </MasonryGrid>
              <p v-else class="text-normal">&hellip;Loading</p>
            </ClientOnly>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IGalleryBasic } from "@/types/types.gallery";
  definePageMeta({
    layout: false
  });

  useHead({
    title: "Display Expanding Spotlights",
    meta: [{ name: "description", content: "Display Expanding Spotlights" }],
    bodyAttrs: {
      class: ""
    }
  });

  const {
    data: spotlightsData,
    execute,
    status,
    pending,
    error,
    refresh
  } = await useFetch<IGalleryBasic>("/api/spotlights", {
    immediate: true
  });
</script>
