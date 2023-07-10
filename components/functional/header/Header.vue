<template>
  <LayoutRow content-max-width="desktop" :padding-X="20" :padding-Y="20" bg-colour="grey">
    <template #content>
      <h1 class="text-color-orange">{{ $t("header.text") }} key(<code>t("header.text")</code>)</h1>
      <p data-test-id="shared-text-test">{{ $t("shared.title") }} key(<code>t("shared.title")</code>)</p>
      <p data-test-id="store-test">{{ rootStore.someString }} key(<code>rootStore.someString</code>)</p>
    </template>
  </LayoutRow>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/store.root"; // Only need to import here due to lack of imports support within Storybook.
// import { useI18n } from "vue-i18n";
// const { t } = useI18n();

const rootStore = useRootStore();
</script>
