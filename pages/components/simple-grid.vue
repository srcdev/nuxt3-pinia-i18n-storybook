<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">Simple Grid Example</h1>
              <p class="text-normal">Grid display.</p>
            </div>
          </template>
        </PageRow>

        <PageRow :use-available-width="false" :apply-gutters="true" page-row-theme="theme-default" style-class-passthrough="pb-20">
          <template #pageRowContent>
            <h2 class="text-header-medium">Simple grid (no scroll reveal)</h2>

            <SimpleGrid min-tile-width="125px" col-repeat-type="auto-fill">
              <template #content>
                <SimpleGridItem v-for="item in quotesData?.quotes" :use-scroll-reveal="false">
                  <template #content>
                    <div class="p-10">
                      <div class="p-10 border border-1 border-grey-dark border-r-4">
                        <p class="text-normal wght-700">{{ item.author }}</p>
                        <p class="text-normal">{{ item.quote }}</p>
                      </div>
                    </div>
                  </template>
                </SimpleGridItem>
              </template>
            </SimpleGrid>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IQuotes } from "@/types/types.quotes";
  // import { useI18n } from "vue-i18n";

  // const { t } = useI18n();

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
