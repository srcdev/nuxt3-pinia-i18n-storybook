<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <div>
              <h1 class="text-header-large">{{ companyId }} Company Projects List</h1>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <ul>
              <li class="pb-6 pt-6">
                <NuxtLink :to="`/companies/${companyId}/details`" class="text-normal">Company ({{ companyId }}) details</NuxtLink>
              </li>
            </ul>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <ul>
              <li v-for="item in projects" class="pb-6 pt-6">
                <NuxtLink :to="projectUrl(item)" class="text-normal">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  export interface IProject {
    projectId: string;
    name: string;
  }

  definePageMeta({
    layout: false
  });

  useHead({
    title: "List Projects",
    meta: [{ name: "description", content: "Desciption meta tag content" }],
    bodyAttrs: {
      class: "companies"
    }
  });

  const route = useRoute();
  const companyId = route.params.companyId;

  const projectUrl = (item: IProject) => {
    return `/companies/${companyId}/projects/${item.projectId}`;
  };

  const projects = <IProject[]>[
    {
      projectId: "123qwsdfertgh-6",
      name: "Help the homeless"
    },
    {
      projectId: "123qwswq12dfertgh-6",
      name: "Help the hungry"
    },
    {
      projectId: "123qwwqpoertgh-3",
      name: "Help the small animals"
    }
  ];
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";
</style>
