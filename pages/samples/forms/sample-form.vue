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
              <FormInputText type="text" placeholder="Username" id="username" validation="username" :required="true" v-model:modelValue="formData" v-model:msg.capitalize="msg" />
              <FormInputText type="password" placeholder="Password" id="password" validation="password" :required="true" v-model:modelValue="formData" v-model:msg.uppercase="msg" />
              <FormInputText type="tel" placeholder="Mobile" id="mobile" validation="telephone" :required="true" v-model:modelValue="formData" />
              <FormInputText type="url" placeholder="Website" id="url" validation="url" :required="true" v-model:modelValue="formData" />
              <FormInputText type="email" placeholder="Email" id="email" validation="emailaddress" :required="true" v-model:modelValue="formData" />
              <input @click.prevent="doSubmit()" type="submit" value="Submit" />
            </form>
          </template>
        </PageRow>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <code>
              {{ formData }}
            </code>
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

  const msg = "testing";

  const { formData } = useFormControl(formId, fieldsInitialState);

  const doSubmit = () => {
    formData.value.doSubmit = true;
    // Do some actions if form is valid
  };
</script>

<style lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
