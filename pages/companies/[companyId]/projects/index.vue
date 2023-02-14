<template>
  <div>
    <NuxtLayout name="default">
      <template #layout-content>
        <h2>Company ID:{{ companyId }} List projects</h2>

        <ul>
          <li>
            <NuxtLink :to="`/companies/${route.params.companyId}/projects/project123`">Project ID:project123</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/companies/${route.params.companyId}/projects/Testing-abc`">Project ID:Testing-abc</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/companies/${route.params.companyId}/projects/wahay`">Project ID:wahay</NuxtLink>
          </li>
        </ul>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: "List Projects",
  meta: [{ name: "description", content: "Desciption meta tag content" }],
  bodyAttrs: {
    class: "companies",
  },
});

const route = useRoute();
const companyId = route.params.companyId;
const projectId = "12232gdfgdf";
const projectUrl = `/companies/${companyId}/projects/${projectId}/details`;
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";
</style>
