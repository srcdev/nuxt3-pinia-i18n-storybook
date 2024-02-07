<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">Project ID:{{ projectId }} Homepage</h1>
            </div>
          </template>
        </PageRow>

        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #pageRowContent>
            <ul>
              <li class="pb-6 pt-6">
                <NuxtLink :to="`/companies/${companyId}/details`" class="text-normal">Company ({{ companyId }}) details</NuxtLink>
              </li>
              <li class="pb-6 pt-6">
                <NuxtLink :to="`/companies/${companyId}/projects`" class="text-normal">Company ({{ companyId }}) projects</NuxtLink>
              </li>
            </ul>
          </template>
        </PageRow>
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
  const companyId = route.params.companyId;
  const projectId = route.params.projectId;
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";
</style>
