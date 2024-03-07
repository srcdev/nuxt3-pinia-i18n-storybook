<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pt-20">
          <template #default>
            <div class="pt-12 pb-12">
              <h1 class="text-header-large">useFetch() with watch and execute</h1>
              <h2 class="text-header-medium">API will be called when ref updates</h2>
              <p>api1Result: {{ api1Result }}</p>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-12 pb-12">
              <p class="text-normal">Type something in the field below and note the api being called</p>
              <form class="form-narrow" novalidate>
                <input type="text" placeholder="Tye something" class="input-text text-normal" v-model="api1Result" />
              </form>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white" style-class-passthrough="mt-12">
          <template #default>
            <div class="pt-12 pb-12">
              <p class="text-normal">Click to trigger "execute" and note the api being called</p>
              <p class="text-normal">Result of API 1 call executes AI 2 call</p>
              <form class="form-narrow" novalidate>
                <InputButton @click.prevent="executeApi1" type="button" variant="tertiary" button-text="Trigger executeApi" size="medium" />
              </form>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white" style-class-passthrough="mt-12">
          <template #default>
            <template v-if="statusApi1 === 'idle'">
              <div class="pt-12 pb-12">
                <p class="text-normal wght-700">API 1 not yet requested</p>
                <p class="text-normal">Click "Trigger executeApi" above or start typing in the text field</p>
              </div>
            </template>
            <template v-if="statusApi1 === 'success'">
              <div class="pt-12 pb-12">
                <p class="text-normal wght-700">API 1 Result</p>
                <pre>{{ api1Result }}</pre>
              </div>
            </template>
            <template v-if="statusApi1 === 'pending'">
              <div class="pt-12 pb-12"><p class="text-normal wght-700">&hellip; API 1 Loading</p></div>
              <p class="text-normal">wait</p>
            </template>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white" style-class-passthrough="mt-12">
          <template #default>
            <template v-if="statusApi2 === 'idle'">
              <div class="pt-12 pb-12">
                <p class="text-normal wght-700">API 2 not yet requested</p>
                <p class="text-normal">Idle until API 1 response</p>
              </div>
            </template>
            <template v-if="statusApi2 === 'success'">
              <div class="pt-12 pb-12">
                <p class="text-normal wght-700">API 2 Result</p>
                <pre>{{ api2Result }}</pre>
              </div>
            </template>
            <template v-if="statusApi2 === 'pending'">
              <div class="pt-12 pb-12">
                <p class="text-normal wght-700">&hellip; API 2 Loading</p>
                <p class="text-normal">wait</p>
              </div>
            </template>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IQuotes } from "@/types/types.quotes";

  definePageMeta({
    layout: false
  });

  useHead({
    title: "useFetch() with watch and execute",
    meta: [{ name: "description", content: "useFetch() with watch and execute" }],
    bodyAttrs: {
      class: ""
    }
  });

  const api1Result = ref(null);
  const api2Result = ref({});

  const { execute: executeApi1, status: statusApi1 } = await useFetch<string>("/api/example/id?delay=2000", {
    immediate: false,
    onResponse({ response }) {
      api1Result.value = response._data;
    }
  });

  const { status: statusApi2 } = await useFetch("/api/example/use-id", {
    query: { delay: 2000, param1: api1Result },
    immediate: false,
    watch: [api1Result],
    onResponse({ response }) {
      api2Result.value = response._data;
    }
  });
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
