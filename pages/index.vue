<template>
  <div>
    <h1>Static header text</h1>
    <p>
      String: <em>"{{ t("header.text") }}"</em> from <strong><code>t('header.text')</code></strong>
    </p>
    <p>
      String: <em>"{{ rootStore.someString }}"</em> from <strong><code>rootStore.someString</code></strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/store.root";

import { useI18n } from "vue-i18n";
definePageMeta({
  layout: false,
});
useHead({
  title: "Home page",
  meta: [{ name: "description", content: "Desciption meta tag content" }],
  bodyAttrs: {
    class: "class-to-apply-if-desired",
  },
});

const { t } = useI18n();
const rootStore = useRootStore();
</script>

<style lang="scss">
// @import '@/assets/styles/imports.scss';
</style>
