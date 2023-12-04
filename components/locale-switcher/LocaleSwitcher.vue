<template>
  <div>
    <h1 class="text-header-large" data-test-id="locale-switcher-header">{{ t("locale-switcher.title") }}</h1>
    <p class="mt-12 mb-12" data-test-id="locale-switcher-info">{{ t("locale-switcher.info") }}</p>
  </div>
  <ClientOnly>
    <div v-for="locale in availableLocales" :key="locale.code">
      <a @click.prevent="updateLocale(locale.code)" :id="`locale-${locale.code}`" class="link-underline" data-test-id="locale-switch-btn">{{ locale.name }}</a>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { ILocaleItem } from "@/types/types.i18n";
  import { useI18nStore } from "@/stores/store.i18n";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
  const { setLocale } = useI18n();
  const i18nStore = useI18nStore();

  const availableLocales = computed(() => {
    return i18nStore.locales.filter((item: ILocaleItem) => item.code !== i18nStore.locale);
  });

  const updateLocale = (code: string) => {
    i18nStore.updateLocale(code);
    setLocale(code);
  };
</script>

<style scoped>
  .link-underline {
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }
</style>
