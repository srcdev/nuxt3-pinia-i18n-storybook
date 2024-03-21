<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <div>
              <h1 class="text-header-large">{{ $t("pages.samples.update-store.header") }}</h1>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <ArrayActions
              :sb-array-item="{
                name: 'Name D',
                description: 'Description D'
              }"
            ></ArrayActions>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false
  });

  useHead({
    title: "Update Store Examples",
    meta: [{ name: "description", content: "" }],
    bodyAttrs: {
      class: ""
    }
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
