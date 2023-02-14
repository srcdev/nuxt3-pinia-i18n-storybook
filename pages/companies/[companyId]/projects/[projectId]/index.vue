<template>
  <div>
    <NuxtLayout name="default">
      <template #layout-content>
        <h2>Project ID:{{ $route.params.projectId }} Homepage</h2>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: "Project details",
  meta: [{ name: "description", content: "Desciption meta tag content" }],
  bodyAttrs: {
    class: "companies",
  },
});

const route = useRoute();
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";
</style>
