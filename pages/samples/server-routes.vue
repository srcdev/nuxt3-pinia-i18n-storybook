<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ $t("pages.server-routes.get.header") }}</h1>

              <p>exampleGetParam</p>
              <p>Array: {{ exampleGetParam }}</p>
              <p>Array => key value: {{ exampleGetParam?.isValid }}</p>
              <p>Array => key value: {{ exampleGetParam?.param1 }}</p>
              <hr />

              <p>examplePostParam</p>
              <p>Array: {{ examplePostParam }}</p>
              <p>Array => key value: {{ examplePostParam }}</p>

              <hr />
              <!--

              <p>Company ID from route</p>
              <p>exampleIdromRoute: {{ exampleIdromRoute }}</p> -->
            </div>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  definePageMeta({
    layout: false,
  });

  useHead({
    title: t("pages.server-routes.head.title"),
    meta: [{ name: "description", content: t("pages.server-routes.head.description") }],
    bodyAttrs: {
      class: "",
    },
  });

  // useFetch infers returned data types
  const param1 = "This is Param 1";
  const {
    data: getResult,
    pending,
    error,
    refresh,
  } = await useFetch("/api/example", {
    query: { param1, param2: "value2" },
  });
  const exampleGetParam = ref(getResult);

  const { data: postResult } = await useFetch("/api/example?param1=Param1", {
    method: "post",
    body: {
      body1: "Body 1",
    },
  });
  const examplePostParam = ref(postResult);

  const { data: routeResult } = await useFetch("/api/company/123123");
  const exampleIdromRoute = ref(routeResult);
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
