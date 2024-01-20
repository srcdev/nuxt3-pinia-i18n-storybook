<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ $t("pages.index.header") }}</h1>
            </div>
          </template>
        </PageRow>

        <PageRow :use-available-width="true" :apply-gutters="false">
          <template #pageRowContent>
            <SectionParallax bg-image="/assets/images/sample.jpg" bg-height="100vh" justify-items="left">
              <template #sidePanel>
                <h1 class="text-header-large">This is a sidePanel</h1>
              </template>
              <template #content>
                <PageRow :use-available-width="true" :apply-gutters="true" style-class-passthrough="pt-40 pb-40">
                  <template #pageRowContent>
                    <div class="">
                      <h1 class="text-header-large">This is a parallax section 1</h1>
                    </div>
                  </template>
                </PageRow>
              </template>
              <template #infoRow>
                <h1 class="text-header-large">This is a infoRow</h1>
              </template>
            </SectionParallax>
          </template>
        </PageRow>

        <PageRow :use-available-width="true" :apply-gutters="false">
          <template #pageRowContent>
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
        </PageRow>

        <PageRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pt-12">
          <template #pageRowContent>
            <DisplayCard
              direction="row"
              gap="12px"
              :content="{
                image: {
                  url: '/assets/images/marrakech.jpg',
                  alignContent: 'top-center',
                },
              }"
              style-class-passthrough="m-12 p-12"
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
        </PageRow>

        <PageRow :use-available-width="false" :apply-gutters="true" page-row-theme="theme-default" style-class-passthrough="pb-20">
          <template #pageRowContent>
            <h2 class="text-header-medium">Simple grid (no scroll reveal)</h2>

            <SimpleGrid min-tile-width="125px" col-repeat-type="auto-fill">
              <template #content>
                <SimpleGridItem>
                  <template #content>
                    <div class="p-10">
                      <p class="text-normal wght-700">Some title 1</p>
                      <p class="text-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <div class="p-10">
                      <p class="text-normal wght-700">Some title 1</p>
                      <p class="text-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <div class="p-10">
                      <p class="text-normal wght-700">Some title 1</p>
                      <p class="text-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <div class="p-10">
                      <p class="text-normal wght-700">Some title 1</p>
                      <p class="text-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <div class="p-10">
                      <p class="text-normal wght-700">Some title 1</p>
                      <p class="text-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <div class="p-10">
                      <p class="text-normal wght-700">Some title 1</p>
                      <p class="text-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </template>
                </SimpleGridItem>
              </template>
            </SimpleGrid>
          </template>
        </PageRow>

        <PageRow :use-available-width="false" :apply-gutters="true">
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

        <PageRow :use-available-width="true" :apply-gutters="false">
          <template #pageRowContent>
            <SectionParallax bg-image="/assets/images/marrakech.jpg" bg-height="100vh" justify-items="left">
              <template #content>
                <div class="">
                  <h1 class="text-header-large">This is a parallax section 2</h1>
                </div>
              </template>
            </SectionParallax>
          </template>
        </PageRow>

        <PageRow :use-available-width="true" :apply-gutters="false">
          <template #pageRowContent>
            <SectionParallax bg-image="/assets/images/antigua.jpg" bg-height="100vh" justify-items="left">
              <template #content>
                <div class="">
                  <h1 class="text-header-large">This is a parallax section 3</h1>
                </div>
              </template>
            </SectionParallax>
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
    title: t("pages.index.head.title"),
    meta: [{ name: "description", content: t("pages.index.head.description") }],
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
