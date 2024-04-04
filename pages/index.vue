<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pt-40 pb-40">
          <template #default>
            <div>
              <h1 class="text-header-large">{{ $t("pages.index.header") }}</h1>
              <p class="text-normal">{{ $t("pages.index.intro") }}</p>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow v-if="status === 'success'" :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <DisplayGrid :min-tile-width="414" col-repeat-type="auto-fill">
              <template #content>
                <DisplayGridItem v-for="item in data?.items" :use-scroll-reveal="false">
                  <template #content>
                    <DisplaySpotlight :alt="item.alt" :url="item.url" />
                  </template>
                </DisplayGridItem>
              </template>
            </DisplayGrid>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="true" :apply-gutters="false">
          <template #default>
            <div class="row-parallax">
              <ul>
                <li>Item 1</li>
                <li>Some other tiem</li>
                <li>And another element</li>
                <li>4th element</li>
                <li>so it continues</li>
                <li>Item 1</li>
                <li>Some other tiem</li>
                <li>And another element</li>
                <li>4th element</li>
                <li>so it continues</li>
                <li>Item 1</li>
                <li>Some other tiem</li>
                <li>And another element</li>
                <li>4th element</li>
                <li>so it continues</li>
              </ul>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pt-12 mb-20">
          <template #default>
            <DisplayFeatureCols
              :content="{
                image: {
                  alt: 'Marrakech',
                  aspectRatio: 406 / 270,
                  url: '/assets/images/marrakech.jpg'
                }
              }"
            >
              <template #col1>
                <div>
                  <h2 class="text-header-small">Column 1</h2>
                  <p class="text-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur faucibus erat, eget auctor lorem tristique at. Suspendisse neque tellus, venenatis sit amet erat eget, varius mattis magna. Pellentesque ut turpis rhoncus,
                    commodo ex id, egestas felis.
                  </p>
                </div>
              </template>
            </DisplayFeatureCols>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { ISpotlightBasic } from "@/types/types.spotlights";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  definePageMeta({
    layout: false
  });

  useHead({
    title: t("pages.index.head.title"),
    meta: [{ name: "description", content: t("pages.index.head.description") }],
    bodyAttrs: {
      class: ""
    }
  });

  const { data, execute, status, pending, error, refresh } = await useFetch<ISpotlightBasic>("/api/spotlights", {
    immediate: true
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .row-parallax {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 4px 0;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }

    ul {
      display: flex;
      gap: 4px;
      li {
        background-color: var(--white);
        border: 1px solid var(--color-grey-3);
        border-radius: 2px;
        left: 0;
        padding: 4px 8px;
        position: sticky;
        white-space: nowrap;
      }
    }
  }
</style>
