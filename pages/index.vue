<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false">
          <template #default>
            <div>
              <h1 class="text-header-large">{{ $t("pages.index.header") }}</h1>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false">
          <template #default>
            <DisplayCarousel></DisplayCarousel>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="true" :apply-gutters="false">
          <template #default>
            <DisplayParallaxGroup bg-image="/assets/images/sample.jpg" bg-height="100vh" justify-items="left">
              <template #content>
                <DisplayRow :use-available-width="true" :apply-gutters="true" style-class-passthrough="pt-40 pb-40">
                  <template #default>
                    <div class="">
                      <h1 class="text-header-large">This is a parallax section 1</h1>
                    </div>
                  </template>
                </DisplayRow>
              </template>
            </DisplayParallaxGroup>
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

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pt-12">
          <template #default>
            <DisplayCard
              direction="row"
              gap="12px"
              :content="{
                image: {
                  url: '/assets/images/marrakech.jpg',
                  alignContent: 'top-center'
                }
              }"
              style-class-passthrough="mt-12 mb-12 p-12"
            >
              <template #header>
                <h1 class="text-header-large">This is a display card</h1>
              </template>
              <template #cardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur faucibus erat, eget auctor lorem tristique at. Suspendisse neque tellus, venenatis sit amet erat eget, varius mattis magna. Pellentesque ut turpis rhoncus,
                  commodo ex id, egestas felis. Vestibulum vitae blandit ex. Aliquam quis purus tellus. Aliquam iaculis cursus leo nec suscipit. Etiam non mattis orci. Integer congue condimentum cursus. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus.
                </p>
              </template>
            </DisplayCard>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="true" :apply-gutters="false">
          <template #default>
            <SectionParallax bg-image="/assets/images/marrakech.jpg" bg-height="100vh" justify-items="left">
              <template #content>
                <div class="">
                  <h1 class="text-header-large">This is a parallax section 2</h1>
                </div>
              </template>
            </SectionParallax>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="true" :apply-gutters="false">
          <template #default>
            <SectionParallax bg-image="/assets/images/antigua.jpg" bg-height="100vh" justify-items="left">
              <template #content>
                <div class="">
                  <h1 class="text-header-large">This is a parallax section 3</h1>
                </div>
              </template>
            </SectionParallax>
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
    title: t("pages.index.head.title"),
    meta: [{ name: "description", content: t("pages.index.head.description") }],
    bodyAttrs: {
      class: ""
    }
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
        background-color: $white;
        border: 1px solid $color-grey-3;
        border-radius: 2px;
        left: 0;
        padding: 4px 8px;
        position: sticky;
        white-space: nowrap;
      }
    }
  }
</style>
