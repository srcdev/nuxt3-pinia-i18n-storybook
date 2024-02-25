<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pt-20">
          <template #default>
            <div>
              <h1 class="text-header-large">Simple Grid Example</h1>
              <p class="text-normal">Grid display.</p>
              <p>
                <InputButton @click="toggleScrollReveal(!useScrollReveal)" type="button" variant="primary" :button-text="`Use Scroll Reveal (${useScrollReveal})`" size="medium" style-class-passthrough="mb-12" /><br />Selecting true, the item will not
                be displayed until viewport moved, this is just a side effect of toggling state, in normal use, the items would be displayed automatically when in viewport.
              </p>
              <div>
                <select @change="updateDisplayCount($event)" class="text-normal">
                  <template v-for="index in maxItems">
                    <option :value="index" :selected="displayCount === index">{{ index }} items</option>
                  </template>
                </select>
                <span class="text-normal ml-12"> Displaying {{ displayCount }} items - redraw sometomes produces overlap</span>
              </div>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-theme="theme-default" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium">CSS Grid (min max width items)</h2>
            <p class="text-header-medium">Items have min max set so will expand to fit parent element at certain viewports.</p>
            <p class="text-normal">Limit {{ displayCount }} item</p>

            <DisplayGrid v-if="dataReady" :min-tile-width="320" col-repeat-type="auto-fit" style-class-passthrough="theme-grey">
              <template #content>
                <DisplayGridItem v-for="item in quotesData?.quotes.slice(0, displayCount)" :use-scroll-reveal="useScrollReveal" :display-count="displayCount">
                  <template #content>
                    <div>
                      <div class="p-10 border border-1 border-grey-dark border-r-4 theme-white">
                        <p class="text-normal wght-700">{{ item.author }}</p>
                        <p class="text-normal">{{ item.quote }}</p>
                      </div>
                    </div>
                  </template>
                </DisplayGridItem>
              </template>
            </DisplayGrid>
            <p v-else class="text-normal">&hellip;Loading</p>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-theme="theme-default" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium">CSS Grid (Fixed width items)</h2>
            <h3 class="text-header-medium">Fixed width items 324px. <span class="text-normal">Differences can be noted when only 1 or 2 items on smaller viewports.</span></h3>
            <p class="text-normal">Limit 1 item <span class="text-normal wght-700">(Fixed width)</span></p>

            <DisplayGrid v-if="dataReady" :min-tile-width="320" col-repeat-type="auto-fit" :fixed-width="true" style-class-passthrough="theme-grey">
              <template #content>
                <DisplayGridItem v-for="item in quotesData?.quotes.slice(0, displayCount)" :use-scroll-reveal="useScrollReveal" :display-count="displayCount">
                  <template #content>
                    <div>
                      <div class="p-10 border border-1 border-grey-dark border-r-4 theme-white">
                        <p class="text-normal wght-700">{{ item.author }}</p>
                        <p class="text-normal">{{ item.quote }}</p>
                      </div>
                    </div>
                  </template>
                </DisplayGridItem>
              </template>
            </DisplayGrid>
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

  const useScrollReveal = ref<boolean>(false);
  const toggleScrollReveal = (state: boolean) => {
    useScrollReveal.value = state;
  };

  const maxItems = 30;
  const displayCount = ref(12);

  const updateDisplayCount = (event: HTMLFormElement) => {
    displayCount.value = event.target.value;
  };

  const dataReady = ref(false);
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
    dataReady.value = true;
  }

  const itemCount1 = computed(() => {
    return quotesData.value?.quotes.slice(0, 1);
  });
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
