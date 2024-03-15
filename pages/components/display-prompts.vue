<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <h1 class="text-header-large">Lifestyle & Services</h1>
            <p class="text-normal wght-700">What to do and what services are near me.</p>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Error Prompts</h2>
            <DisplayPromptError :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptError>

            <DisplayPromptError :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title Only (Dismissable)</template>
            </DisplayPromptError>

            <DisplayPromptError :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptError>

            <DisplayPromptError :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptError>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Warning Prompts</h2>
            <DisplayPromptWarning :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptWarning>

            <DisplayPromptWarning :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Warning Prompt Title Only (Dismissable)</template>
            </DisplayPromptWarning>

            <DisplayPromptWarning :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Warning Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptWarning>

            <DisplayPromptWarning :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Warning Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptWarning>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Info Prompts</h2>
            <DisplayPromptInfo :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptInfo>

            <DisplayPromptInfo :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Info Prompt Title Only (Dismissable)</template>
            </DisplayPromptInfo>

            <DisplayPromptInfo :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Info Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptInfo>

            <DisplayPromptInfo :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Info Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptInfo>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Success Prompts</h2>
            <DisplayPromptSuccess :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptSuccess>

            <DisplayPromptSuccess :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Success Prompt Title Only (Dismissable)</template>
            </DisplayPromptSuccess>

            <DisplayPromptSuccess :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Success Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptSuccess>

            <DisplayPromptSuccess :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Success Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptSuccess>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Secondary Prompts</h2>
            <DisplayPromptSecondary :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptSecondary>

            <DisplayPromptSecondary :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Secondary Prompt Title Only (Dismissable)</template>
            </DisplayPromptSecondary>

            <DisplayPromptSecondary :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Secondary Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptSecondary>

            <DisplayPromptSecondary :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Secondary Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptSecondary>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { ISpotlightBasic } from "@/types/types.spotlights";
  definePageMeta({
    layout: false
  });

  useHead({
    title: "Display Expanding Spotlights",
    meta: [{ name: "description", content: "Display Expanding Spotlights" }],
    bodyAttrs: {
      class: ""
    }
  });

  // const { $api } = useNuxtApp();
  // const spotlightRepo = respository($api);
  // const { data } = await useAsyncData(() => spotlightRepo.get());

  const { data, execute, status, pending, error, refresh } = await useFetch<ISpotlightBasic>("/api/spotlights", {
    immediate: true
  });

  // const { data } = await useAsyncData(() => $fetch("/api/spotlights"));
</script>
