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
            <form @submit.prevent="doSubmit()" :id="formData.formId">
              <p>{{ t("pages.samples.sample-form.formErrorsMessage", formData.errorCount) }}</p>
              <FormInputText type="text" placeholder="Username" id="username" validation="username" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.username" />
              <FormInputText type="password" placeholder="Password" id="password" validation="password" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.password" />
              <FormInputText type="tel" placeholder="Mobile" id="mobile" validation="telephone" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.telephone" />
              <FormInputText type="url" placeholder="Website" id="url" validation="url" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.url" />
              <FormInputText type="email" placeholder="Email" id="email" validation="emailaddress" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.emailaddress" />
              <input @click.prevent="doSubmit()" type="submit" value="Submit" />
            </form>
          </template>
        </PageRow>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <pre>
  {{ formData.customErrorMessages }}
</pre
            >
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IFieldsInitialState } from "@/types/types.forms";

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

  // Setup formData
  const formId = "sample-form";
  const fieldsInitialState = <IFieldsInitialState>{
    username: "",
    password: "",
    mobile: "",
    url: "",
    email: "",
  };

  const { formData, updateCustomErrors } = useFormControl(formId, fieldsInitialState);

  const sampleCustomErrorUrl = {
    useCustomError: true,
    message: "This is a sample custom error for error URL",
  };
  updateCustomErrors("url", formData, sampleCustomErrorUrl);

  const sampleCustomErrorUsername = {
    useCustomError: true,
    message: "This is a sample custom error for error username",
  };
  updateCustomErrors("username", formData, sampleCustomErrorUsername);

  setTimeout(() => {
    updateCustomErrors("username", formData, null);
  }, 5000);

  const doSubmit = () => {
    formData.value.doSubmit = true;
    // Do some actions if form is valid
  };
</script>

<style lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
