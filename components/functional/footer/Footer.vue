<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>{{ $t("footer.title") }}</p>
      <ul class="footer-links-list">
        <li v-for="link in footerLinks" class="footer-links-item">
          <NuxtLink :to="$t(link.url)" class="footer-links-link">{{ $t(link.text) }}</NuxtLink>
        </li>
      </ul>
      <p>{{ $t("footer.copyright", { year, currentYear }) }}</p>
    </div>
  </footer>
</template>

<script setup type="ts">
// import { useI18n } from 'vue-i18n'

const footerLinks = [
  {
    "text": "footer.links.home.text",
    "url": "footer.links.home.text",
  }
];
// const { t } = useI18n()

const currentYear = new Date().getFullYear()
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
