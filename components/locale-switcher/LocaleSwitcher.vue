<template>
  <div>
    <h1 class="text-header-large" data-test-id="locale-switcher-header">{{ t("components.locale-switcher.title") }}</h1>
    <p class="mt-12 mb-12" data-test-id="locale-switcher-info">{{ t("components.locale-switcher.info") }}</p>
  </div>
  <ClientOnly>
    <p class="text-normal">Current locale id "{{ locale }}" from i18n config</p>
    <p class="text-normal">Current locale id "{{ i18nStore.locale }}" from i18nStore config</p>

    <div v-if="Object.keys(availableLocales).length > 1">
      <p class="text-normal">Available locales</p>

      <ul v-for="locale in availableLocales">
        <li>Local name {{ locale }} ({ locale.id })</li>
      </ul>
    </div>

    <hr />

    <p>Switch to:</p>
    <div v-for="locale in availableLocales">
      <FormInputButton @click.prevent="updateLocale(locale.code)" :button-text="locale.name"></FormInputButton>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
  import type { ILocaleItem } from "@/types/types.i18n";

  import { useI18n } from "vue-i18n";

  const { t, locale, setLocale, setLocaleCookie } = useI18n();
  const i18nStore = useI18nStore();

  const availableLocales = computed(() => {
    return i18nStore.locales.filter((item: ILocaleItem) => item.code !== locale.value);
  });

  const updateLocale = (code: string) => {
    setLocale(code);
    setLocaleCookie(code);
    i18nStore.updateLocale(code);
  };
</script>

<style scoped>
  .link-underline {
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }
</style>
