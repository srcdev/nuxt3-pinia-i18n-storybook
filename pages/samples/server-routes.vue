<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large mt-12">{{ $t("pages.samples.server-routes.pageTitle") }}</h1>
              <p class="text-header-medium mt-8">{{ $t("pages.samples.server-routes.pageInfo") }}</p>
              <h2 class="text-header-large mt-12">{{ $t("pages.samples.server-routes.get.header") }}</h2>

              <p>Array: {{ exampleGetParam }}</p>
              <p>Array => key value: {{ exampleGetParam?.isValid }}</p>
              <p>Array => key value: {{ exampleGetParam?.param1 }}</p>
              <hr />

              <h2 class="text-header-large mt-12">{{ $t("pages.samples.server-routes.post.header") }}</h2>
              <p>Array: {{ examplePostParam }}</p>
              <p>Array => key value: {{ examplePostParam }}</p>

              <hr />

              <h2 class="text-header-large mt-12">{{ $t("pages.samples.server-routes.route.header") }}</h2>
              <p>{{ $t("pages.samples.server-routes.route.info") }}</p>
              <p>
                exampleIdromRoute: <strong>{{ exampleIdromRoute }}</strong>
              </p>
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
    title: t("pages.samples.server-routes.head.title"),
    meta: [{ name: "description", content: t("pages.samples.server-routes.head.description") }],
    bodyAttrs: {
      class: "",
    },
  });

  // useFetch infers returned data types
  const param1 = ref("GET: This is Param 1 value");
  const {
    data: getResults,
    pending: getPending,
    error: getError,
    refresh: getRefresh,
  } = await useFetch("/api/example", {
    query: { param1, param2: "GET: This is Param 2 value" },
  });
  const exampleGetParam = ref(getResults);

  const {
    data: postResult,
    pending: postPending,
    error: postError,
    refresh: postRefresh,
  } = await useFetch("/api/example", {
    method: "post",
    body: {
      body1: "POST: Body 1",
    },
  });
  const examplePostParam = ref(postResult);

  const { data: routeResult } = await useFetch("/api/company/123123");
  const exampleIdromRoute = ref(routeResult);
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
