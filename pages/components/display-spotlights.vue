<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <h1 class="text-header-large">Lifestyle & Services</h1>
            <p class="text-normal wght-700">What to do and what services are near me.</p>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <ClientOnly>
              <DisplayGrid :min-tile-width="414" col-repeat-type="auto-fill">
                <template #content>
                  <DisplayGridItem v-for="item in data?.items" :use-scroll-reveal="false">
                    <template #content>
                      <DisplaySpotlight :alt="item.alt" :url="item.url" />
                    </template>
                  </DisplayGridItem>
                </template>
              </DisplayGrid>
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
