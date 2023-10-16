<template>
  <div>
    <h1 class="text-header-large" data-test-id="locale-switcher-header">{{ t("locale-switcher.title") }}</h1>
  </div>
  <div>
    <button v-for="locale in availableLocales" :key="locale.code" @click.prevent="updateLocale(locale.code)" :id="`locale-${locale.code}`" data-test-id="locale-switch-btn">{{ locale.name }}</button>
  </div>
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
