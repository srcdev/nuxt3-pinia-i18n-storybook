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
              <FormInputText type="text" placeholder="Username" id="username" v-model="formData.data.username" />
              <FormInputText type="password" placeholder="Password" id="password" v-model="formData.data.password" />
              <FormInputText type="tel" placeholder="Mobile" id="mobile" v-model="formData.data.mobile" />
              <FormInputText type="url" placeholder="Website" id="url" v-model="formData.data.url" />
              <FormInputText type="email" placeholder="Email" id="email" v-model="formData.data.email" />
            </form>
          </template>
        </PageRow>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <p>
              {{ formData.data }}
            </p>
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
      username: "",
      password: "",
      mobile: "",
      url: "",
      email: "",
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

<style lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
