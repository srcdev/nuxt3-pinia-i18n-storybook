<template>
  <DisplayRow :use-available-width="isFullWidth" :apply-gutters="false" display-row-theme="theme-black">
    <template #default>
      <header class="header" :class="[headerTheme, { 'full-width': isFullWidth }, { 'signed-in': authenticated }]">
        <DisplayFlexGroup align-content="center-left" gap="24px">
          <template #default>
            <DisplayFlexGroupItem :flex-grow="true">
              <template #default>
                <NuxtLink to="/" class="text-header-large text-color-white">{{ $t("components.header.text") }}</NuxtLink>
              </template>
            </DisplayFlexGroupItem>
            <DisplayFlexGroupItem v-if="authenticated">
              <template #default>
                <IconButtonLogout @click="doLogout()" :button-text="$t('components.header.logout-btn')" />
              </template>
            </DisplayFlexGroupItem>
            <DisplayFlexGroupItem>
              <template #default>
                <HeaderNavigation></HeaderNavigation>
              </template>
            </DisplayFlexGroupItem>
          </template>
        </DisplayFlexGroup>
      </header>
    </template>
  </DisplayRow>
</template>

<script setup lang="ts">
  // import { useAccountStore } from "@/stores/store.account";
  // import { useRootStore } from "@/stores/store.root";
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
      default: "header-default",
      validator(value: string) {
        return ["header-default", "header-dark"].includes(value);
      }
    }
  });

  const { t } = useI18n();
  const isFullWidth = ref(false);
  // const rootStore = useRootStore();
  // const accountStore = useAccountStore();

  // const signedIntext = computed(() => {
  //   return accountStore.authenticated ? t("components.header.authenticated") : t("components.header.signedOut");
  // });

  const { authenticated } = storeToRefs(useAccountStore());
  const { doLogout } = useAuthApi();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .header-default {
    --bgColour: #e2e2e2;
  }

  .header-dark {
    --bgColour: #d2d2d2;
  }

  .header {
    // background-color: var(--bgColour);
    background-color: $black;
    padding: 16px 0;

    @include mqMinTablet {
      padding: 24px 0;
    }

    // @include mqDesktopContentMax {
    //   padding: 32px 0;
    // }

    &.full-width {
      @include mqMinTablet {
        padding: 24px;
      }

      // @include mqDesktopContentMax {
      //   padding: 32px;
      // }
    }
  }
</style>
