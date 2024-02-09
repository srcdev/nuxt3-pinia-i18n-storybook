<template>
  <PageRow :use-available-width="isFullWidth" :apply-gutters="false" page-row-theme="theme-black">
    <template #pageRowContent>
      <header class="header" :class="[headerTheme, { 'full-width': isFullWidth }]">
        <FlexGroup align-content="center-left">
          <template #default>
            <FlexGroupItem :flex-grow="true">
              <template #default>
                <NuxtLink to="/" class="text-header-large text-color-white">{{ $t("components.header.text") }}</NuxtLink>
              </template>
            </FlexGroupItem>
            <FlexGroupItem>
              <template #default>
                <HeaderNavigation></HeaderNavigation>
              </template>
            </FlexGroupItem>
          </template>
        </FlexGroup>
      </header>
    </template>
  </PageRow>
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
      },
    },
    headerTheme: {
      type: String,
      default: "header-default",
      validator(value: string) {
        return ["header-default", "header-dark"].includes(value);
      },
    },
  });

  const { t } = useI18n();
  const isFullWidth = ref(false);
  // const rootStore = useRootStore();
  // const accountStore = useAccountStore();

  // const signedIntext = computed(() => {
  //   return accountStore.authenticated ? t("components.header.authenticated") : t("components.header.signedOut");
  // });
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
