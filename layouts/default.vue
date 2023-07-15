<template>
  <div class="Simon">
    <PageRow :fit-content="true" :apply-gutters="false">
      <template #pageRowContent>
        <Header :header-theme="headerTheme"></Header>
      </template>
    </PageRow>

    <PageRow :fit-content="true">
      <template #pageRowContent>
        <div class="layout-grid" :class="[pageTheme, { 'has-nav': showLeftNav }]">
          <div v-if="showLeftNav" class="layout-left-nav">
            <nav class="left-nav">
              <div class="left-nav-inner">
                <h2 class="text-header-medium">Left Nav Here</h2>
                <p>Left nav will be child component</p>
              </div>
            </nav>
          </div>
          <div class="layout-content">
            <slot name="layout-content"></slot>
          </div>
        </div>
      </template>
    </PageRow>

    <PageRow :fit-content="true">
      <template #pageRowContent>
        <Footer :footer-theme="footerTheme"></Footer>
      </template>
    </PageRow>
  </div>
</template>

<script setup lang="ts">
import { useAccountStore } from "@/stores/store.account"; // Only need to import here due to lack of imports support within Storybook.

const props = defineProps({
  pageTheme: {
    type: String,
    default: null,
    validator: (val) => ["default", "theme-white", "theme-grey", "theme-blue", "theme-green"].includes(val as string),
  },
  footerTheme: {
    type: String,
    default: "default",
    validator: (val) => ["default", "theme-white", "theme-dark"].includes(val as string),
  },
  headerTheme: {
    type: String,
    default: "default",
    validator: (val) => ["default", "theme-dark"].includes(val as string),
  },
});

const accountStore = useAccountStore();
const showLeftNav = computed(() => accountStore.signedIn);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/imports.scss";

.layout-grid {
  &.has-nav {
    @include mqDesktopContentMax {
      display: grid;
      grid-template-columns: 216px auto;
      gap: 0px;
    }

    .layout-left-nav {
      display: none;
      @include mqDesktopContentMax {
        display: grid;
        grid-column-start: 1;
        // transform: translateY(-1px);
      }
    }

    .layout-content {
      @include mqDesktopContentMax {
        display: grid;
        grid-column-start: 2;
      }
    }
  }

  transition: all linear 200ms;
}

.layout-content {
  margin: 0 auto;
  // max-width: $desktop-content-width;
  width: 100%;
}

.left-nav {
  background-color: $color-grey-1;
  color: $white;
  margin-right: 16px;
  width: 216px;

  &-inner {
    padding: 0 12px;
  }
}
</style>
