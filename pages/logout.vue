<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-32">
              <h1 class="text-header-large">Logout page</h1>
            </div>
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
    title: "Logout page",
    meta: [{ name: "description", content: "Logout page" }],
    bodyAttrs: {
      class: ""
    }
  });
</script>

<style lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
