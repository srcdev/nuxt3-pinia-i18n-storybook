<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false">
          <template #default>
            <div>
              <h1 class="text-header-large">Expanding Spotlights Example</h1>
              <p class="text-normal">Has a <span class="text-normal wght-700">3000ms delay</span> to test pending behaviour</p>
              <p>
                pending(<span class="text-normal wght-700">{{ pending }}</span
                >) | status(<span class="text-normal wght-700">{{ status }}</span
                >)
              </p>
            </div>
          </template>
        </DisplayRow>
        <ClientOnly>
          <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
            <template #default>
              <h1 class="text-header-medium">Display Expanding Spotlights</h1>
              <template v-if="status === 'idle'">
                <div>
                  <InputButton @click="execute()" type="button" variant="tertiary" button-text="Get data" size="medium" style-class-passthrough="mt-12 mb-12" />
                </div>
              </template>
              <template v-if="status === 'success'">
                <DisplayExpandingSpotlights style-class-passthrough="pb-20 pt-20" type="gallery" :data="galleryData ?? {}" />
              </template>
              <template v-if="status === 'pending'">
                <p class="text-normal wght-700">&hellip; Loading</p>
              </template>
            </template>
          </DisplayRow>
        </ClientOnly>
        <DisplayRow :use-available-width="false" :apply-gutters="false">
          <template #default>
            <div>
              <InputButton @click="execute()" type="button" variant="tertiary" button-text="Refresh data" size="medium" style-class-passthrough="mb-12" />
            </div>
          </template>
        </DisplayRow>
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
    data: galleryData,
    execute,
    status,
    pending,
    error,
    refresh
  } = await useFetch<IGalleryBasic>("/api/gallery/basic?delay=3000", {
    immediate: false
  });
</script>
