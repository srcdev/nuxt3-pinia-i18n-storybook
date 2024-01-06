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
        <PageRow :fit-content="true" :apply-gutters="true" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <form @submit.prevent="doSubmit()" :id="formData.formId" class="form-narrow">
              <p>{{ t("pages.samples.sample-form.formErrorsMessage", formData.errorCount) }}</p>

              <FormInputTextWrapper id="username" validation="username" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.username">
                <template #default>
                  <FormInputText type="text" id="username" validation="username" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.username" />
                </template>
              </FormInputTextWrapper>

              <FormInputTextWrapper id="mobile" validation="telephone" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.mobile">
                <template #default>
                  <FormInputText type="tel" id="mobile" validation="telephone" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.mobile" />
                </template>
              </FormInputTextWrapper>

              <FormInputTextWrapper id="password" validation="password" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.password">
                <template #default>
                  <FormInputText type="password" id="password" validation="password" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.password" />
                </template>
              </FormInputTextWrapper>

              <FormInputTextWrapper id="url" validation="url" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.url">
                <template #default>
                  <FormInputText type="url" id="url" validation="url" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.url" />
                </template>
              </FormInputTextWrapper>

              <FormInputTextWrapper id="email" validation="emailaddress" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.emailaddress">
                <template #default>
                  <FormInputText type="email" id="email" validation="emailaddress" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.emailaddress" />
                </template>
              </FormInputTextWrapper>

              <FormInputCheckboxWrapper id="terms" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.terms">
                <template #default>
                  <FormInputCheckbox id="terms" true-value="Sure" false-value="Nope" :required="true" v-model:modelValue="formData" />
                </template>
              </FormInputCheckboxWrapper>

              <FlexGroup flex-flow="row" gap="24px" align-content="center-right" :full-width="true" apply-classes="mt-12 mb-12">
                <template #default>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <FormInputButton type="reset" @click.prevent="doReset()" :is-pending="false" button-text="Reset" />
                    </template>
                  </FlexGroupItem>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <FormInputButton type="submit" @click.prevent="doSubmit()" :is-pending="false" button-text="Submit" />
                    </template>
                  </FlexGroupItem>
                </template>
              </FlexGroup>
            </form>
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
    terms: false,
  };

  const { formData, updateCustomErrors, resetForm } = useFormControl(formId, fieldsInitialState);

  const doSubmit = () => {
    formData.value.doSubmit = true;
    // Do some actions if form is valid
  };

  const sampleCustomError1 = {
    useCustomError: true,
    message: "This is a sample custom error for error MOBILE",
  };
  updateCustomErrors("mobile", formData, sampleCustomError1);

  const sampleCustomError2 = {
    useCustomError: true,
    message: "This is a sample custom error for error USERNAME",
  };
  updateCustomErrors("username", formData, sampleCustomError2);

  const doReset = () => {
    console.log("resetForm()");
    resetForm();
  };
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .form {
    &-narrow {
      max-width: 600px;
    }
  }
</style>
