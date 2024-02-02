<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <div class="pt-32">
              <h1 class="text-header-large">{{ t("pages.login.pageTitle") }}</h1>
            </div>
          </template>
        </PageRow>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <ClientOnly>
              <form @submit.prevent="doSubmit()" :id="formData.formId" class="form-narrow" novalidate>
                <p v-if="showErrors">{{ t("pages.login.formErrorsMessage", formData.errorCount) }}</p>

                <InputTextWithWrapper id="username" type="email" validation="emailaddress" :required="true" v-model="formData" i18n-key="pages.login.fields.username" />
                <InputTextWithWrapper id="password" type="password" validation="password" :required="true" v-model="formData" i18n-key="pages.login.fields.password" />

                <InputCheckboxWrapper id="rememberMe" name="rememberMe" :required="false" v-model="formData" i18n-key="pages.login.fields.rememberMe">
                  <template #inputTitle>
                    <p class="header-small wght-700">{{ t("pages.login.fields.rememberMe.title") }}</p>
                  </template>
                  <template #inputField>
                    <InputCheckboxCore id="rememberMe" :required="false" v-model="formData" />
                  </template>
                </InputCheckboxWrapper>

                <FlexGroup flex-flow="row" gap="24px" align-content="center-right" :full-width="true" style-class-passthrough="mt-12 mb-12">
                  <template #default>
                    <FlexGroupItem :flex-grow="false">
                      <template #default>
                        <InputButton type="submit" variant="primary" @click.prevent="doSubmit()" :is-pending="false" :button-text="t('pages.login.buttons.submit')" />
                      </template>
                    </FlexGroupItem>
                  </template>
                </FlexGroup>
              </form>
            </ClientOnly>
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
  import type { IFieldsInitialState } from "@/types/types.forms";
  import type { IPlacesList } from "@/types/types.places";

  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  definePageMeta({
    layout: false,
  });

  useHead({
    title: t("pages.login.head.title"),
    meta: [{ name: "description", content: t("pages.login.head.description") }],
    bodyAttrs: {
      class: "",
    },
  });

  const { data: placesData, pending, status, error, refresh } = await useFetch<IPlacesList>("/api/places/list");

  // Setup formData
  const formId = "login";
  const fieldsInitialState = <IFieldsInitialState>{
    username: "",
    password: "",
    rememberMe: false,
  };

  const { formData, getErrorCount, updateCustomErrors, formIsValid, showErrors } = useFormControl(formId, fieldsInitialState);

  const doSubmit = async () => {
    formData.value.doSubmit = true;
    // getErrorCount();

    if (formIsValid.value) {
      console.log("formData.value.data: ", formData.value.data);
      console.log("formData.value.errorCount: ", formData.value.errorCount);
    } else {
      console.warn("Form has errors");
    }
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
