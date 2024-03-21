<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pt-20">
          <template #default>
            <div>
              <h1 class="text-header-large">Masonry Grid Ordered Example</h1>
              <h2 class="text-header-medium">Fetch Quotes from an API</h2>
              <p class="text-normal">CSS + JS Masonry Grid Ordered.</p>
              <p class="text-normal wght-700">Responsive item sizes.</p>
              <p class="text-normal">Grid items are drawn left to right in order. Slower than pure CSS, uses some JS to achieve desired result. It's slighly 'buggy' still on resize. Some overlap occasionally on re-draw.</p>
              <p class="text-normal">
                <InputButton @click.prevent="toggleFixedWidth(!useFixedWidth)" type="button" variant="tertiary" :button-text="`Use Fixed Width (${useFixedWidth})`" size="medium" /><br />Selecting true will fix width of grid items, they will not flow
                with a min width and expand as according to parent element width.
              </p>
              <p class="text-normal"><span class="wght-700">NOTE:</span> This toggle switch for demo only, in practice this would be set when implemented. You may need to refresh browser for it fully pop into correct grid.</p>
              <div>
                <select @change="updateDisplayCount($event)" class="text-normal">
                  <template v-for="index in maxItems">
                    <option :value="index" :selected="displayCount == index">{{ index }} items</option>
                  </template>
                </select>
                <span class="text-normal ml-12"> Displaying {{ displayCount }} items - refresh page recommended when adding items</span>
              </div>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <template v-if="!pending">
              <MasonryGridOrderedResponsive :gridData="quotesData?.quotes.slice(0, displayCount) ?? <IQuotes>{}" :gap="12" :min-tile-width="300" :fixed-width="useFixedWidth" :use-responsive-widths="true">
                <template v-for="(item, index) in quotesData?.quotes.slice(0, displayCount)" v-slot:[item.id]>
                  <div class="p-10 border border-1 border-grey-dark border-r-4">
                    <p class="text-normal wght-700">{{ index + 1 }}: {{ item.author }}</p>
                    <p class="text-normal">{{ item.quote }}</p>
                  </div>
                </template>
              </MasonryGridOrderedResponsive>
            </template>
            <p v-else class="text-normal">&hellip;Loading</p>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IQuotes } from "@/types/types.quotes";
  // import { useI18n } from "vue-i18n";

  // const { t } = useI18n();

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

  const toggleFixedWidth = (state: boolean) => {
    useFixedWidth.value = state;
  };

  const maxItems = 30;
  const { displayCount, useFixedWidth } = storeToRefs(useRootStore());

  const updateDisplayCount = (event: Event) => {
    displayCount.value = Number((event.target as HTMLInputElement).value);
  };

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
