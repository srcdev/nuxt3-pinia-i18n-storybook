<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <div class="pt-32">
              <h1 class="text-header-large">Find current weather conditions for your location</h1>
            </div>
          </template>
        </PageRow>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <div class="pt-32">
              <h1 class="text-header-large">Current Weather at Bologonja Gate</h1>
              <pre v-if="status === 'success'">{{ weatherData }}</pre>
            </div>
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
    title: "Find current weather conditions for your location",
    meta: [{ name: "description", content: "Find current weather conditions for your location" }],
    bodyAttrs: {
      class: "",
    },
  });

  const key = useRuntimeConfig().public.openWeatherApiKey;
  const lat = 35.2034136;
  const long = -1.6663373;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
  // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${key}`;

  console.log("key: ", key);
  const {
    data: weatherData,
    execute,
    status,
    pending,
    error,
    refresh,
  } = await useFetch<any>(url, {
    immediate: true,
  });
</script>

<style lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
