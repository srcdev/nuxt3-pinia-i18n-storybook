<template>
  <footer class="footer" :class="[footerTheme]">
    <div class="footer-inner">
      <p>{{ $t("footer.title") }}</p>
      <ul class="footer-links-list">
        <li v-for="link in footerLinks" class="footer-links-item">
          <NuxtLink :to="$t(link.url)" class="footer-links-link">{{ $t(link.text) }}</NuxtLink>
        </li>
      </ul>
      <p v-html="$t('footer.copyright', { year: currentYear })"></p>

      <p>
        String: <em>"{{ rootStore.someString }}"</em> from <strong><code>rootStore.someString</code></strong>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useRootStore } from "@/stores/store.root";
  import LayoutRow from "@/components/scaffolding/layout-row/LayoutRow.vue";

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
      text: "footer.links.home.text",
      url: "footer.links.home.url",
    },
    {
      text: "footer.links.components.text",
      url: "footer.links.components.url",
    },
    {
      text: "footer.links.lang-switcher.text",
      url: "footer.links.lang-switcher.url",
    },
  ];
  // const { t } = useI18n();
  const rootStore = useRootStore();
  const currentYear = new Date().getFullYear();
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
