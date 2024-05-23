<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-32">
              <h1 class="text-header-large">{{ t("pages.login.pageTitle") }}</h1>
            </div>
          </template>
        </DisplayRow>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <form @submit.prevent="isPending()" class="form-narrow" novalidate>
              <p v-if="showErrors">{{ t("pages.login.formErrorsMessage", formData.errorCount) }}</p>

              <InputTextWithWrapper id="username" type="text" validation="emailaddress" :required="true" v-model="formData" i18n-key="pages.login.fields.username" />
              <InputPassword id="password" type="password" validation="password" v-model="formData" i18n-key="pages.login.fields.password" />

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
                      <InputButtonTertiary type="submit" @click.prevent="isPending()" :is-pending="false" :button-text="t('pages.login.buttons.submit')" />
                    </template>
                  </DisplayFlexGroupItem>
                </template>
              </DisplayFlexGroup>
            </form>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IFieldsInitialState } from "@/types/types.forms";
  import type { ILoginPayload } from "@/types/types.auth";

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

  const { setAuthenticated } = useAccountState();

  // Setup formData
  const fieldsInitialState = ref<IFieldsInitialState>({
    // username: "",
    // password: "",
    username: "admin@gmail.com",
    password: "!5illyPa55w0rd+",
    // username: "user@gmail.com",
    // password: "!5illyPa55w0rd+",
    rememberMe: false
  });

  const route = useRoute();
  const redirect = route.query.returnUrl as string;

  const { formData, initFormData, getErrorCount, updateCustomErrors, resetForm, formIsValid, showErrors } = useFormControl();
  await initFormData(fieldsInitialState.value);

  const { doLogin } = useAuthApi();

  const doNavigateTo = (path: string) => {
    navigateTo(path);
  };

  const isPending = async () => {
    formData.value.isPending = true;
    await getErrorCount();

    if (formIsValid.value) {
      const body = <ILoginPayload>{
        username: formData.value.data.username,
        password: formData.value.data.password,
        rememberMe: formData.value.data.rememberMe
      };

      try {
        const result = await doLogin(body);
        console.log(result);
        // const token = useCookie("token");
        // token.value = result.token;
        useAccountStore().setAuthenticationState(true);
        setAuthenticated(true);
        // setUserData(result.data as IUserData);
        doNavigateTo(redirect);
      } catch (error: any) {
        updateCustomErrors("username", error._data.data.detail);
        updateCustomErrors("password", error._data.data.detail);
      }
    }
  };
</script>

<style lang="css">
  .form {
    &-narrow {
      max-width: 600px;
    }
  }
</style>
