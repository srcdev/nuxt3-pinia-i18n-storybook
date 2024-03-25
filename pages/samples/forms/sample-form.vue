<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-32">
              <h1 class="text-header-large">{{ t("pages.samples.sample-form.pageTitle") }}</h1>
            </div>
          </template>
        </DisplayRow>
        <ClientOnly>
          <DisplayRow v-if="formData.submitSuccess" :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
            <template #default>
              <div class="pt-32">
                <h2 class="text-header-medium">{{ t("pages.samples.sample-form.successTitle") }}</h2>
              </div>
            </template>
          </DisplayRow>

          <DisplayRow v-else :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
            <template #default>
              <form @submit.prevent="isPending()" class="form-narrow" novalidate>
                <p v-if="showErrors">{{ t("pages.samples.sample-form.formErrorsMessage", formData.errorCount) }}</p>

                <InputTextWithWrapper id="username" type="text" validation="username" :required="true" v-model="formData" i18n-key="pages.samples.sample-form.fields.username" />

                <InputTextWithWrapper id="mobile" type="tel" validation="telephone" :required="true" v-model="formData" i18n-key="pages.samples.sample-form.fields.mobile" />

                <InputTextWithWrapper id="password" type="password" validation="password" :required="true" v-model="formData" i18n-key="pages.samples.sample-form.fields.password" />

                <InputTextWithWrapper id="url" type="url" validation="url" :required="true" v-model="formData" i18n-key="pages.samples.sample-form.fields.url" />

                <InputTextWithWrapper id="email" type="email" validation="emailaddress" :required="true" v-model="formData" i18n-key="pages.samples.sample-form.fields.emailaddress" />

                <InputCheckboxMultipleWrapper id="places" :required="true" v-model="formData" i18n-key="pages.samples.sample-form.fields.places">
                  <template #inputTitle>
                    <p class="header-small wght-700">{{ t("pages.samples.sample-form.fields.places.title") }}</p>
                  </template>
                  <template #inputField>
                    <template v-for="item in placesData?.data">
                      <InputCheckboxWithLabel :config="item" :required="true" v-model="formData" i18n-key="pages.samples.sample-form.fields.places" />
                    </template>
                  </template>
                </InputCheckboxMultipleWrapper>

                <InputCheckboxWrapper id="terms" name="terms" :required="true" v-model="formData" i18n-key="pages.samples.sample-form.fields.terms">
                  <template #inputTitle>
                    <p class="header-small wght-700">{{ t("pages.samples.sample-form.fields.terms.title") }}</p>
                  </template>
                  <template #inputField>
                    <InputCheckboxCore id="terms" true-value="Sure" false-value="Nope" :required="true" v-model="formData" />
                  </template>
                </InputCheckboxWrapper>

                <DisplayFlexGroup flex-flow="row" gap="24px" align-content="center-right" :full-width="true" style-class-passthrough="mt-12 mb-12">
                  <template #default>
                    <DisplayFlexGroupItem :flex-grow="false" style-class-passthrough="hide">
                      <template #default>
                        <InputButton type="reset" variant="primary" @click.prevent="doReset()" :is-pending="false" button-text="Reset" />
                      </template>
                    </DisplayFlexGroupItem>
                    <DisplayFlexGroupItem :flex-grow="false">
                      <template #default>
                        <InputButtonTertiary type="submit" @click.prevent="isPending()" :is-pending="false" button-text="Submit" />
                      </template>
                    </DisplayFlexGroupItem>
                  </template>
                </DisplayFlexGroup>
              </form>
            </template>
          </DisplayRow>
        </ClientOnly>

        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-32">
              <pre>{{ formData }}</pre>
            </div>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IFieldsInitialState } from "@/types/types.forms";
  import type { IPlacesList } from "@/types/types.places";

  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  definePageMeta({
    layout: false
  });

  useHead({
    title: t("pages.samples.sample-form.head.title"),
    meta: [{ name: "description", content: t("pages.samples.sample-form.head.description") }],
    bodyAttrs: {
      class: ""
    }
  });

  const { data: placesData, pending, status, error, refresh } = await useFetch<IPlacesList>("/api/places/list");

  // Setup formData

  const { formData, initFormData, getErrorCount, updateCustomErrors, resetForm, formIsValid, showErrors } = useFormControl();

  // Empty form data uses 'emptyFormData'
  // const emptyFormData = ref<IFieldsInitialState>({
  //   username: "",
  //   password: "",
  //   mobile: "",
  //   url: "",
  //   email: "",
  //   places: [],
  //   terms: false
  // });

  // Start with data from API, could also be Pinia stro data
  const { data: fieldsInitialState } = await useFetch<IFieldsInitialState>("/api/form/get-sample-data", {
    method: "get",
    query: {
      readFile: false
    }
  });

  await initFormData(fieldsInitialState);

  const isPending = async () => {
    formData.value.isPending = true;
    await getErrorCount();

    if (await formIsValid.value) {
      console.log("Form valid - will progress");

      await $fetch("/api/form/post-sample-data", {
        method: "post",
        body: formData.value.data,
        immediate: false,
        onResponse({ response }) {
          formData.value.isPending = false;
          formData.value.submitSuccess = true;
        },
        onResponseError({ error }) {
          console.log("An error occured posting form data", error);
        }
      });
    } else {
      console.warn("Form has errors");
    }
  };

  const doReset = () => {
    console.log("resetForm()");
    console.log(fieldsInitialState.value);
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
