<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">Masonry Grid Example</h1>
            </div>
          </template>
        </PageRow>
        <PageRow :use-available-width="false" :apply-gutters="true" style-class-passthrough="pb-20">
          <template #pageRowContent>
            <h1 class="text-header-medium">Fetch Quotes from an API</h1>
            <ClientOnly>
              <MasonryGrid v-if="hasQuotesData" min-tile-width="300px">
                <template #content>
                  <MasonryGridItem v-for="item in quotesData?.quotes">
                    <template #content>
                      <div class="p-10 border border-1 border-grey-dark border-r-4">
                        <p class="text-normal wght-700">{{ item.author }}</p>
                        <p class="text-normal">{{ item.quote }}</p>
                      </div>
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
  import type { IQuotes } from "@/types/types.quotes";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  definePageMeta({
    layout: false,
  });

  useHead({
    title: "Masonry Grid Example",
    meta: [{ name: "description", content: "Masonry Grid Example" }],
    bodyAttrs: {
      class: "",
    },
  });

  const hasQuotesData = ref(false);
  const { data: quotesData, pending, status, error, refresh } = await useFetch<IQuotes>("https://dummyjson.com/quotes");

  // proxied version
  // const { data: quotesData, pending, status, error, refresh } = await useFetch<IQuotes>("https://dummyjson.com/quotes", { server: false });

  // Nuxt SSG can transform API resut to keep bundle size small
  /*
    const { data: quotesData, pending, status, error, refresh } = await useFetch<IQuotes>("https://dummyjson.com/quotes", {
    transform(input) {
      return {
        quotes: input.quotes
      }
    }
  });

  */

  if (status.value === "success") {
    hasQuotesData.value = true;
  }
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
