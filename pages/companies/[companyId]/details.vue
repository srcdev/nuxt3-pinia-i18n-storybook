<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ companyId }} Company Details Page</h1>
            </div>
          </template>
        </PageRow>

        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #pageRowContent>
            <ul>
              <li class="pb-6 pt-6">
                <NuxtLink :to="projectUrl" class="text-normal">Projects</NuxtLink>
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
