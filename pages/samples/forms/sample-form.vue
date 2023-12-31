<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ t("pages.samples.sample-form.pageTitle") }}</h1>
            </div>
          </template>
        </PageRow>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <form :id="formData.formId">
              <p>Here is the form - "{{ formData.formId }}"</p>
              <FormInputText input-type="text" v-model="formData.data.name" />
            </form>
          </template>
        </PageRow>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <code>
              {{ formData.data }}
            </code>
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
    title: t("pages.samples.sample-form.head.title"),
    meta: [{ name: "description", content: t("pages.samples.sample-form.head.description") }],
    bodyAttrs: {
      class: "",
    },
  });

  const formData = ref({
    formId: "sample-form",
    data: {
      name: "",
    },
  });

  watch(
    () => formData.value,
    () => {
      console.log(`formData.value:`, formData.value.data);
    },
    { deep: true }
  );
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
