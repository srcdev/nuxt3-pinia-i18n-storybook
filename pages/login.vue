<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-32">
              <h1 class="text-header-large">{{ t("pages.login.pageTitle") }}</h1>
              <p>Form pre filled with creds from <code class="text-normal">https://dummyjson.com/auth/login</code></p>
            </div>
          </template>
        </DisplayRow>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <ClientOnly>
              <form @submit.prevent="isPending()" class="form-narrow" novalidate>
                <p v-if="showErrors">{{ t("pages.login.formErrorsMessage", formData.errorCount) }}</p>

                <InputTextWithWrapper id="username" type="text" validation="usernameWeak" :required="true" v-model="formData" i18n-key="pages.login.fields.username" />
                <InputTextWithWrapper id="password" type="password" validation="passwordWeak" :required="true" v-model="formData" i18n-key="pages.login.fields.password" />

                <InputCheckboxWrapper id="rememberMe" name="rememberMe" :required="false" v-model="formData" i18n-key="pages.login.fields.rememberMe">
                  <template #inputTitle>
                    <p class="header-small wght-700">{{ t("pages.login.fields.rememberMe.title") }}</p>
                  </template>
                  <template #inputField>
                    <InputCheckboxCore id="rememberMe" :required="false" v-model="formData" />
                  </template>
                </InputCheckboxWrapper>

                <DisplayFlexGroup flex-flow="row" gap="24px" align-content="center-right" :full-width="true" style-class-passthrough="mt-12 mb-12">
                  <template #default>
                    <DisplayFlexGroupItem :flex-grow="false">
                      <template #default>
                        <InputButton type="submit" variant="primary" @click.prevent="isPending()" :is-pending="false" :button-text="t('pages.login.buttons.submit')" />
                      </template>
                    </DisplayFlexGroupItem>
                  </template>
                </DisplayFlexGroup>
              </form>
            </ClientOnly>
          </template>
        </DisplayRow>

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
  import type { ILoginPayload, ILoginResponse } from "@/types/types.auth";

  import { useI18n } from "vue-i18n";
  import { useAuthApi } from "~/composables/useAuthApi";
  const { t } = useI18n();

  definePageMeta({
    layout: false
  });

  useHead({
    title: t("pages.login.head.title"),
    meta: [{ name: "description", content: t("pages.login.head.description") }],
    bodyAttrs: {
      class: ""
    }
  });

  // Setup formData
  const fieldsInitialState = ref<IFieldsInitialState>({
    // username: "",
    // password: "",
    username: "kminchelle",
    password: "0lelplR",
    // username: "kminchelle1", // invalid creds
    // password: "0lelplR1", // invalid creds
    rememberMe: false
  });

  const { formData, initFormData, getErrorCount, updateCustomErrors, resetForm, formIsValid, showErrors } = useFormControl();
  await initFormData(fieldsInitialState.value);

  const { doAuthUseFetch, doAuthDollarFetch } = useAuthApi();

  const isPending = async () => {
    formData.value.isPending = true;
    await getErrorCount();

    if (formIsValid.value) {
      // These for testing alternatives
      const useComposable = false;
      const useDollarFetchVersion = false;

      if (useComposable) {
        const body = <ILoginPayload>{
          username: formData.value.data.username,
          password: formData.value.data.password
        };

        if (useDollarFetchVersion) {
          try {
            const result = await doAuthDollarFetch(body);
            const token = useCookie("token");
            token.value = result.token;
            useAccountStore().setAuthenticationState(true);
            navigateTo("/");
          } catch (error) {
            console.error("error: ", error);
            // updateCustomErrors("username", error.message);
            // updateCustomErrors("password", error.message);
          }
        } else {
          const { data: userData, error, status } = await doAuthUseFetch(body);
          if (userData.value) {
            const token = useCookie("token");
            token.value = userData?.value?.token;
            useAccountStore().setAuthenticationState(true);
            navigateTo("/");
          }
          if (status.value === "error") {
            updateCustomErrors("username", error.value?.data.message);
            updateCustomErrors("password", error.value?.data.message);
          }
        }
      } else {
        // updateCustomErrors("username", "Username or password incorrect");
        // updateCustomErrors("password", "Username or password incorrect");
        // return;
        const {
          data: userData,
          pending,
          status,
          error,
          refresh
        } = await useFetch<ILoginResponse>("https://dummyjson.com/auth/login", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username: formData.value.data.username,
            password: formData.value.data.password
          }
        });
        if (userData.value) {
          const token = useCookie("token");
          token.value = userData?.value?.token;
          useAccountStore().setAuthenticationState(true);
          navigateTo("/");
        }
        if (status.value === "error") {
          updateCustomErrors("username", error.value?.data.message);
          updateCustomErrors("password", error.value?.data.message);
        }
      }
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
