<template>
  <div>
    <NuxtLayout name="default">
      <template #layout-content>
        <h2>Home</h2>
        <ul>
          <li>
            <NuxtLink to="/companies/123abcqwer0987/details">Company ID:123abcqwer0987</NuxtLink>
          </li>
        </ul>

        <p>
          String: <em>"{{ rootStore.someString }}"</em> from <strong><code>rootStore.someString</code></strong>
        </p>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/store.root";
import { useI18n } from "vue-i18n";
import CommonServices from "@/services/services.common";

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

// simple request to test axios
await CommonServices.samplePost("testing");
</script>

<style lang="scss">
// @import '@/assets/styles/imports.scss';
</style>
