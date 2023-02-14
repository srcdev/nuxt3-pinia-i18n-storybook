<template>
  <div>
    <NuxtLayout name="default">
      <template #layout-content>
        <h2>Company ID:{{ companyId }} List projects</h2>

        <ul>
          <li v-for="item in projects">
            <NuxtLink :to="projectUrl(item)">{{ item.name }}</NuxtLink>
          </li>
        </ul>
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

const projectUrl = (item: IProject) => {
  return `/companies/${companyId}/projects/${item.projectId}`;
};

const projects = <IProject[]>[
  {
    projectId: "123qwsdfertgh-6",
    name: "Help the homeless",
  },
  {
    projectId: "123qwswq12dfertgh-6",
    name: "Help the hungry",
  },
  {
    projectId: "123qwwqpoertgh-3",
    name: "Help the small animals",
  },
];
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";
</style>
