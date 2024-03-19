<template>
  <footer class="footer">
    <DisplayRow :use-available-width="false" :apply-gutters="true" display-row-theme="theme-default" display-row-inner-theme="theme-default">
      <template #default>
        <div class="footer-title">
          <p class="text-normal wght-700">Footer title bar</p>
        </div>
      </template>
    </DisplayRow>

    <DisplayRow :use-available-width="false" :apply-gutters="true" display-row-theme="theme-default" display-row-inner-theme="theme-default">
      <template #default>
        <div class="footer-links section-1">
          <p class="text-normal wght-700">Section 1 links</p>
          <ul class="footer-links-list">
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Some link 1</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Some other link to home</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Home link section 1</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Test link 2</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Example link 5</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-links section-2">
          <p class="text-normal wght-700">Section 2 links</p>
          <ul class="footer-links-list">
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Some link 1</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Some other link to home</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Home link section 1</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-links section-3">
          <p class="text-normal wght-700">Section 3 links</p>
          <ul class="footer-links-list">
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Some link 1</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Some other link to home</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Home link section 1</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Some link 1</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Test link 2</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Some link 1</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link">Example link 5</NuxtLink></li>
          </ul>
        </div>
      </template>
    </DisplayRow>

    <DisplayRow :use-available-width="false" :apply-gutters="true" display-row-theme="theme-default" display-row-inner-theme="theme-default">
      <template #default>
        <div class="footer-links section-2">
          <ul class="footer-links-list">
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link wght-700">Some link 1</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link wght-700">Some other link to home</NuxtLink></li>
            <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link wght-700">Home link section 1</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-links">
          <p v-html="$t('components.footer.copyright', { year: currentYear })"></p>
        </div>
      </template>
    </DisplayRow>
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
      }
    },
    footerTheme: {
      type: String,
      value: "theme-grey",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green"].includes(val as string)
    }
  });

  const footerLinks = [
    {
      text: "components.footer.links.home.text",
      url: "components.footer.links.home.url"
    },
    {
      text: "components.footer.links.components.text",
      url: "components.footer.links.components.url"
    },
    {
      text: "components.footer.links.lang-switcher.text",
      url: "components.footer.links.lang-switcher.url"
    },
    {
      text: "components.footer.links.server-routes.text",
      url: "components.footer.links.server-routes.url"
    },
    {
      text: "components.footer.links.test-form.text",
      url: "components.footer.links.test-form.url"
    }
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
      align-items: left;
      display: flex;
      flex-direction: column;
    }

    &-links {
      &-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      // &-item {
      // }
      &-link {
        display: block;
        padding: 0.6rem 0;
        text-decoration: none;
      }
    }
  }
</style>
