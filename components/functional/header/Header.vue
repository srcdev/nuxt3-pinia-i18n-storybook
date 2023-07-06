<template>
  <LayoutRow content-max-width="desktop" :padding-X="20" :padding-Y="20" bg-colour="grey">
    <template #content>
      <h1 class="text-color-orange">{{ $t("header.text") }} key(<code>t("header.text")</code>)</h1>
      <p data-test-id="shared-text-test">{{ $t("shared.title") }} key(<code>t("shared.title")</code>)</p>
    </template>
  </LayoutRow>
</template>

<script setup lang="ts">
// import { useI18n } from "vue-i18n";
// const { t } = useI18n();
</script>
