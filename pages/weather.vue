<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-32">
              <h1 class="text-header-large">Find current weather conditions for your location</h1>
            </div>
          </template>
        </DisplayRow>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-32">
              <h1 class="text-header-large">Current Weather at Bologonja Gate</h1>
              <pre v-if="status === 'success'">{{ weatherData }}</pre>
            </div>
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
    title: "Find current weather conditions for your location",
    meta: [{ name: "description", content: "Find current weather conditions for your location" }],
    bodyAttrs: {
      class: ""
    }
  });

  const key = useRuntimeConfig().public.openWeatherApiKey;
  const lat = 35.2034136;
  const long = -1.6663373;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
  // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${key}`;

  console.log("key: ", key);
  console.log(process.env.NODE_ENV);

  const {
    data: weatherData,
    execute,
    status,
    pending,
    error,
    refresh
  } = await useFetch<any>(url, {
    immediate: true
  });
</script>

<style lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
