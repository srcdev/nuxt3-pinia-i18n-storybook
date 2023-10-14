<template>
  <button v-for="locale in availableLocales" :key="locale.code" @click.prevent="updateLocale(locale.code)">{{ locale.name }}</button>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { ILocaleItem } from "@/types/types.i18n";
  import { useI18nStore } from "@/stores/store.i18n";
  const { locale, locales, setLocale } = useI18n();
  const i18nStore = useI18nStore();

  const availableLocales = computed(() => {
    return i18nStore.locales.filter((item: ILocaleItem) => item.code !== i18nStore.locale);
  });

  const updateLocale = (code: string) => {
    i18nStore.updateLocale(code);
    setLocale(code);
  };
</script>
