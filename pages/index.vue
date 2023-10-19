<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ t("pages.index.header") }}</h1>
            </div>
          </template>
        </PageRow>

        <PageRow :fit-content="true" :apply-gutters="false">
          <template #pageRowContent>
            <SectionParallax bg-image="/assets/images/sample.jpg" bg-height="100vh" justify-items="left">
              <template #content>
                <PageRow :fit-content="true" :apply-gutters="true" apply-classes="pt-40 pb-40">
                  <template #pageRowContent>
                    <div class="">
                      <h1 class="text-header-large">This is a parallax section 1</h1>
                    </div>
                  </template>
                </PageRow>
              </template>
            </SectionParallax>
          </template>
        </PageRow>

        <PageRow :fit-content="true" :apply-gutters="false">
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

        <PageRow :fit-content="true" :apply-gutters="false">
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
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
