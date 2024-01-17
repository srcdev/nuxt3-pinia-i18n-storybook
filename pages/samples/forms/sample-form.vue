<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <div class="pt-32">
              <h1 class="text-header-large">{{ t("pages.samples.sample-form.pageTitle") }}</h1>
            </div>
          </template>
        </PageRow>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <form @submit.prevent="doSubmit()" :id="formData.formId" class="form-narrow">
              <p v-if="formData.formIsValid">{{ t("pages.samples.sample-form.formErrorsMessage", formData.errorCount) }}</p>

              <InputTextWithWrapper id="username" validation="username" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.username" />

              <InputTextWithWrapper id="mobile" validation="telephone" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.mobile" />

              <InputTextWithWrapper id="password" validation="password" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.password" />

              <InputTextWithWrapper id="url" validation="url" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.url" />

              <InputTextWithWrapper id="email" validation="emailaddress" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.emailaddress" />

              <FormInputCheckboxMultipleWrapper id="places" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.places">
                <template #inputTitle>
                  <p class="header-small font-700">{{ t("pages.samples.sample-form.fields.places.title") }}</p>
                </template>
                <template #inputField>
                  <template v-for="item in multiOptions">
                    <FormInputCheckboxWithLabel :config="item" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.places" />
                  </template>
                </template>
              </FormInputCheckboxMultipleWrapper>

              <FormInputCheckboxWrapper id="terms" name="terms" :required="true" v-model:modelValue="formData" i18n-key="pages.samples.sample-form.fields.terms">
                <template #inputTitle>
                  <p class="header-small font-700">{{ t("pages.samples.sample-form.fields.terms.title") }}</p>
                </template>
                <template #inputField>
                  <InputCheckboxCore id="terms" true-value="Sure" false-value="Nope" :required="true" v-model:modelValue="formData" />
                </template>
              </FormInputCheckboxWrapper>

              <FlexGroup flex-flow="row" gap="24px" align-content="center-right" :full-width="true" style-class-passthrough="mt-12 mb-12">
                <template #default>
                  <FlexGroupItem :flex-grow="false" style-class-passthrough="hide">
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
        <pre>
          {{ formData }}
        </pre>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IOptionsConfig, IFieldsInitialState } from "@/types/types.forms";

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

  const multiOptions = [
    {
      id: "bath",
      name: "places",
      value: "place-12",
      label: "Bath",
    },
    {
      id: "bristol",
      name: "places",
      value: "place-23",
      label: "Bristol",
    },
    {
      id: "london",
      name: "places",
      value: "place-42",
      label: "London",
    },
    {
      id: "sunderland",
      name: "places",
      value: "place-56",
      label: "Sunderland",
    },
    {
      id: "penzance",
      name: "places",
      value: "place-09",
      label: "Penzance",
    },
  ] as IOptionsConfig[];

  // Setup formData
  const formId = "sample-form";
  const fieldsInitialState = <IFieldsInitialState>{
    username: "",
    password: "",
    mobile: "",
    url: "",
    email: "",
    places: [],
    terms: false,
  };

  const { formData, getErrorCount, updateCustomErrors, resetForm, formIsValid } = useFormControl(formId, fieldsInitialState);

  const doSubmit = () => {
    formData.value.doSubmit = true;
    getErrorCount();

    console.log("formIsValid.value: ", formIsValid.value);

    if (formIsValid.value) {
      console.log(formData.value.data);
    } else {
      console.warn("Form has errors");
    }
  };

  const doReset = () => {
    // console.log("resetForm()");
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
