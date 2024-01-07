<template>
  <PageRow :fit-content="isFullWidth" :apply-gutters="false" page-row-theme="theme-black">
    <template #pageRowContent>
      <header class="header" :class="[headerTheme, { 'full-width': isFullWidth }]">
        <FlexGroup>
          <template #default>
            <FlexGroupItem :flex-grow="true">
              <template #default>
                <h1 class="text-header-large text-color-white">{{ $t("components.header.text") }}</h1>
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
      value: "value1",
      validator(value: string) {
        return ["value1", "value2"].includes(value);
      },
    },
    headerTheme: {
      type: String,
      value: "header-default",
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
  //   return accountStore.signedIn ? t("components.header.signedIn") : t("components.header.signedOut");
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
      padding: 40px 0;
    }

    @include mqDesktopContentMax {
      padding: 32px 0;
    }

    &.full-width {
      padding: 16px;

      @include mqMinTablet {
        padding: 40px;
      }

      @include mqDesktopContentMax {
        padding: 32px;
      }
    }
  }
</style>
