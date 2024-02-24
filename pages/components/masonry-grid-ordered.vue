<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false">
          <template #default>
            <div>
              <h1 class="text-header-large">Masonry Grid Ordered Example</h1>
              <h2 class="text-header-medium">Fetch Quotes from an API</h2>
              <p class="text-normal">CSS + JS Masonry Grid Ordered.</p>
              <p class="text-normal">Grid items are drawn left to right in order. Slower than pure CSS, uses some JS to achieve desired result.</p>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <p class="text-normal">Limit 30 items</p>
            <MasonryGridOrdered v-if="!pending" :grid-data="quotesData ?? {}" :min-tile-width="300" />
            <p v-else class="text-normal">&hellip;Loading</p>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IQuotes } from "@/types/types.quotes";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  definePageMeta({
    layout: false
  });

  useHead({
    title: "Masonry Grid Example",
    meta: [{ name: "description", content: "Masonry Grid Example" }],
    bodyAttrs: {
      class: ""
    }
  });

  const displayCount = 12;
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
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
