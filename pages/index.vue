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

        <DisplayRow :use-available-width="true" :apply-gutters="false">
          <template #default>
            <SectionParallax bg-image="/assets/images/sample.jpg" bg-height="100vh" justify-items="left">
              <template #sidePanel>
                <h1 class="text-header-large">This is a sidePanel</h1>
              </template>
              <template #content>
                <DisplayRow :use-available-width="true" :apply-gutters="true" style-class-passthrough="pt-40 pb-40">
                  <template #default>
                    <div class="">
                      <h1 class="text-header-large">This is a parallax section 1</h1>
                    </div>
                  </template>
                </DisplayRow>
              </template>
              <template #infoRow>
                <h1 class="text-header-large">This is a infoRow</h1>
              </template>
            </SectionParallax>
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
                <p>
                  Donec condimentum mauris nec elementum sagittis. Aenean at arcu sit amet mauris sodales dignissim vel vel ligula. Mauris ac quam at ipsum commodo aliquam quis sed tortor. Donec pulvinar mollis quam ac sodales. Ut tristique ex sed
                  enim tempus egestas. Donec sit amet aliquet libero. Donec vitae magna a massa ultrices pulvinar et eu nisi. Donec tempor, elit tincidunt suscipit bibendum, justo nisl blandit nisi, et cursus orci metus eget turpis. Ut ac sem eros.
                  Nulla ac cursus quam. Nulla egestas finibus mi quis elementum. Proin semper sed nunc vitae venenatis. Fusce sed lectus a justo tincidunt fringilla.
                </p>
                <p>
                  Praesent eget sem vel erat hendrerit ullamcorper quis sed dui. Suspendisse id commodo ipsum. Integer molestie porttitor laoreet. Donec cursus, erat non venenatis efficitur, sapien nisi varius enim, at lobortis leo eros id leo. Proin
                  at pellentesque nunc. Quisque egestas hendrerit maximus. Etiam pellentesque malesuada dapibus. Vivamus tincidunt massa pharetra posuere fringilla. Suspendisse velit turpis, posuere sit amet lorem sit amet, pharetra ultrices nibh.
                  Sed posuere placerat nulla, et dignissim ligula. Vestibulum sit amet leo vitae mi tempus cursus. In sollicitudin nunc non tempus egestas. Pellentesque id erat eu turpis lobortis lobortis. Nunc pulvinar purus id diam ullamcorper
                  scelerisque.
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
