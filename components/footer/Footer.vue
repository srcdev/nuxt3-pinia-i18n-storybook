<template>
  <footer class="footer" :class="[footerTheme]">
    <div class="footer-inner">
      <p>{{ $t("components.footer.title") }}</p>
      <ul class="footer-links-list">
        <li v-for="link in footerLinks" class="footer-links-item">
          <NuxtLink :to="$t(link.url)" class="footer-links-link">{{ $t(link.text) }}</NuxtLink>
        </li>
      </ul>
      <p v-html="$t('components.footer.copyright', { year: currentYear })"></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  // import { useRootStore } from "@/stores/store.root";

  // import { useI18n } from "vue-i18n";

  const props = defineProps({
    someProp: {
      type: String,
      value: "value1",
      validator(value: string) {
        return ["value1", "value2"].includes(value);
      },
    },
    footerTheme: {
      type: String,
      value: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green"].includes(val as string),
    },
  });

  const footerLinks = [
    {
      text: "components.footer.links.home.text",
      url: "components.footer.links.home.url",
    },
    {
      text: "components.footer.links.components.text",
      url: "components.footer.links.components.url",
    },
    {
      text: "components.footer.links.lang-switcher.text",
      url: "components.footer.links.lang-switcher.url",
    },
    {
      text: "components.footer.links.server-routes.text",
      url: "components.footer.links.server-routes.url",
    },
    {
      text: "components.footer.links.test-form.text",
      url: "components.footer.links.test-form.url",
    },
  ];
  // const { t } = useI18n();
  // const rootStore = useRootStore();
  const currentYear = new Date().getFullYear();
  // const footerTitleAsConst = t("footer.title");
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .footer {
    // $self: &;

    &-inner {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    &-links {
      &-list {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      // &-item {
      // }
      &-link {
        display: block;
        padding: 0.6rem;
      }
    }
  }
</style>
