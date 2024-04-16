<template>
  <DisplayRow :use-available-width="isFullWidth" :apply-gutters="false" display-row-theme="theme-header">
    <template #default>
      <header :class="['header', headerTheme, { 'full-width': isFullWidth }, { 'signed-in': isSignedIn }]">
        <DisplayFlexGroup align-content="center-left" gap="24px">
          <template #default>
            <DisplayFlexGroupItem :flex-grow="true">
              <template #default>
                <h1 class="ghost-text">
                  <NuxtLink to="/" class="header-home-link text-header-large text-color-white">
                    <span class="header-home-link-logo"></span>
                    <span class="header-home-link-text">{{ $t("components.header.text") }}</span>
                  </NuxtLink>
                </h1>
              </template>
            </DisplayFlexGroupItem>
            <ClientOnly>
              <DisplayFlexGroupItem v-if="isSignedIn" style-class-passthrough="header-logout">
                <template #default>
                  <IconButtonLogout type="button" @click.prevent="controlDialogs('logout', !dialogsConfig['logout'].open)" size="large" :button-text="$t('components.header.logout-btn')" />
                </template>
              </DisplayFlexGroupItem>
              <DisplayFlexGroupItem v-else style-class-passthrough="header-login">
                <template #default>
                  <UtilsIconLinkAccount :link-text="$t('components.header.login-btn')" />
                </template>
              </DisplayFlexGroupItem>
            </ClientOnly>
            <DisplayFlexGroupItem>
              <template #default>
                <HeaderNavigation></HeaderNavigation>
              </template>
            </DisplayFlexGroupItem>
          </template>
        </DisplayFlexGroup>
      </header>
      <DisplayDialogPrompt v-if="dialogsConfig['logout'].open" v-model="dialogsConfig['logout'].open" style-class-passthrough="content-width">
        <template #dialogContent>
          <p class="text-normal wght-700">Confirm logout?</p>
        </template>
        <template #actionButtonLeft>
          <InputButtonCancel @click.prevent="controlDialogs('logout', !dialogsConfig['logout'].open)" type="submit" button-text="Cancel" size="medium" style-class-passthrough="mb-12" />
        </template>
        <template #actionButtonRight>
          <InputButtonConfirm @click.prevent="doLogout()" type="submit" button-text="Confirm" size="medium" style-class-passthrough="mb-12" />
        </template>
      </DisplayDialogPrompt>
    </template>
  </DisplayRow>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";

  const props = defineProps({
    someProp: {
      type: String,
      default: "value1",
      validator(value: string) {
        return ["value1", "value2"].includes(value);
      }
    },
    headerTheme: {
      type: String,
      default: "header-dark",
      validator(value: string) {
        return ["header-default", "header-dark"].includes(value);
      }
    }
  });

  const { t } = useI18n();
  const isFullWidth = ref(false);

  const { isSignedIn } = useIsSignedIn();
  const { setAuthenticated } = useAccountState();
  console.log("header > accountState > known hydration issue ");

  const dialogsConfig = ref({
    logout: {
      open: false
    }
  });

  const controlDialogs = (name: string, state: boolean) => {
    console.log("controlDialogs > name > ", name, state);
    (dialogsConfig.value as Record<string, { open: boolean }>)[name].open = state;
  };

  const { isAuthenticated } = storeToRefs(useAccountStore());
  const doLogout = async () => {
    await $fetch("/api/auth/logout", {
      onResponseError({ response }) {
        throw response;
      }
    });

    isAuthenticated.value = false;
    setAuthenticated(false);
    controlDialogs("logout", false);
    navigateTo("/");
    return;
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .header {
    padding: 16px 0;

    @include mqMinTablet {
      padding: 24px 0;
    }

    &.full-width {
      @include mqMinTablet {
        padding: 24px;
      }
    }

    &-home-link {
      display: inline-flex;
      align-items: center;
      justify-content: left;
      text-decoration: none;

      &-logo {
        background: transparent url("/assets/images/logo/logo-75.webp") 0 -5px no-repeat;
        background-size: contain;
        border: 1px solid var(--color-orange-5);
        border-radius: 50%;
        aspect-ratio: 1;
        width: 50px;
        @include mqMinTablet {
          width: 75px;
        }
      }
      &-text {
        display: inline-block;
        font-size: 1.4rem;
        margin-left: 12px;
        width: 80px;

        @include mqMinTablet {
          font-size: 1.8rem;
        }
      }
    }

    &-login,
    &-logout {
      .btn {
        &-icon-only {
          :deep(.btn-icon.large) {
            .icon {
              color: var(--color-white);
              padding: 2px;
              transition: all ease-in-out 200ms;
              &:hover {
                padding: 0;
              }
            }
          }

          background-color: transparent;
          border: 1px solid transparent;
          outline: 1px solid transparent;
          transition: all ease-in-out 200ms;

          &:hover,
          &:focus {
            background-color: rgba(0, 0, 0, 0.2);
            border-color: white;
            outline: 1px solid rgba(255, 255, 255, 0.2);
            color: var(--color-grey-8);
          }
        }
      }
    }

    &-login {
      .btn {
        &-icon-only {
          border-radius: 50%;
          :deep(.btn-icon.large) {
            .icon {
              width: 36px;
              height: 36px;
            }
          }
        }
      }
    }

    &-logout {
      .btn {
        &-icon-only {
          border-radius: 4px;
          :deep(.btn-icon.large) {
            .icon {
              width: 32px;
              height: 32px;
            }
          }
        }
      }
    }
  }
</style>
