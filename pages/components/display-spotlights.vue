<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <h1 class="text-header-large">Display Feature Spotlights</h1>
            <p class="text-normal wght-700">(WIP) Not currently responsive</p>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <ClientOnly>
              <MasonryGrid :min-tile-width="300">
                <template #content>
                  <MasonryGridItem v-for="item in data?.items" :use-scroll-reveal="false">
                    <template #content>
                      <DisplaySpotlight :alt="item.alt" :url="item.url" />
                    </template>
                  </MasonryGridItem>
                </template>
              </MasonryGrid>
            </ClientOnly>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { ISpotlightBasic } from "@/types/types.spotlights";
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

  // const { $api } = useNuxtApp();
  // const spotlightRepo = respository($api);
  // const { data } = await useAsyncData(() => spotlightRepo.get());

  const { data, execute, status, pending, error, refresh } = await useFetch<ISpotlightBasic>("/api/spotlights", {
    immediate: true
  });

  // const { data } = await useAsyncData(() => $fetch("/api/spotlights"));
</script>
