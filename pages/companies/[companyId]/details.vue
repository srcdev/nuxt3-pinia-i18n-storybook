<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <div>
              <h1 class="text-header-large">{{ companyId }} Company Details Page</h1>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <ul>
              <li class="pb-6 pt-6">
                <NuxtLink :to="projectUrl" class="text-normal">Projects</NuxtLink>
              </li>
            </ul>
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
    title: "Company Projects",
    meta: [{ name: "description", content: "Desciption meta tag content" }],
    bodyAttrs: {
      class: "companies"
    }
  });

  const route = useRoute();
  const companyId = route.params.companyId;
  const projectUrl = `/companies/${companyId}/projects`;
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";
</style>
