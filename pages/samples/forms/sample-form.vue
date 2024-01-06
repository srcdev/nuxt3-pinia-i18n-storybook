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

              <FormInputWrapper id="username" validation="username" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.username">
                <template #default>
                  <FormInputText type="text" placeholder="Username" id="username" validation="username" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.username" />
                </template>
              </FormInputWrapper>

              <FormInputWrapper id="password" validation="password" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.password">
                <template #default>
                  <FormInputText type="password" placeholder="Password" id="password" validation="password" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.password" />
                </template>
              </FormInputWrapper>

              <FormInputWrapper id="mobilie" validation="telephone" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.telephone">
                <template #default>
                  <FormInputText type="tel" placeholder="Mobile" id="mobile" validation="telephone" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.telephone" />
                </template>
              </FormInputWrapper>

              <FormInputWrapper id="url" validation="url" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.url">
                <template #default>
                  <FormInputText type="url" placeholder="Website" id="url" validation="url" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.url" />
                </template>
              </FormInputWrapper>

              <FormInputWrapper id="email" validation="emailaddress" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.emailaddress">
                <template #default>
                  <FormInputText type="email" placeholder="Email" id="email" validation="emailaddress" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.emailaddress" />
                </template>
              </FormInputWrapper>
            </form>
          </template>
        </PageRow>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <div class="mt-12">
              <FormInputButton type="submit" @click.prevent="doSubmit()" :is-pending="false" button-text="Submit" />
            </div>
          </template>
        </PageRow>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
            <pre
              >{{ formData }}
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

  const {
    formData,
    // updateCustomErrors
  } = useFormControl(formId, fieldsInitialState);

  const doSubmit = () => {
    formData.value.doSubmit = true;
    // Do some actions if form is valid
  };
</script>

<style lang="scss">
  // @import "@/assets/styles/imports.scss";
</style>
