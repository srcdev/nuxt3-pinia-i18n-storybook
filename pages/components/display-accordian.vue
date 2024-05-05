<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false">
          <template #default>
            <div>
              <h1 class="text-header-large">Accordian</h1>
              <p class="text-normal">Feature columns can have 2 0r 3 columns</p>
            </div>
          </template>
        </DisplayRow>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <h1 class="text-header-medium">Example</h1>
            <DisplayAccordian :data />
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
    title: "Display Accordian",
    meta: [{ name: "description", content: "Display Accordian" }],
    bodyAttrs: {
      class: ""
    }
  });

  interface IAccordianData {
    title: string;
    content: string;
  }

  const data = ref<IAccordianData[]>([
    {
      title: "Trigger Item 1",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, amet!"
    },
    {
      title: "Trigger Item 2",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, amet!"
    },
    {
      title: "Trigger Item 3",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, amet!"
    }
  ]);
</script>
