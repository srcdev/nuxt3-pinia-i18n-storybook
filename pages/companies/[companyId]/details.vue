<template>
  <div>
    <NuxtLayout name="default">
      <template #layout-content>
        <h2>Company ID:{{ companyId }} Homepage</h2>
        <ul>
          <li>
            <NuxtLink :to="projectUrl">Projects</NuxtLink>
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
  title: "Company Projects",
  meta: [{ name: "description", content: "Desciption meta tag content" }],
  bodyAttrs: {
    class: "companies",
  },
});

const route = useRoute();
const companyId = route.params.companyId;
const projectUrl = `/companies/${companyId}/projects`;
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";
</style>
