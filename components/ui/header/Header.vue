<template>
  <div>
    <h1>Static header text</h1>
    <h1>This from locales, key <em>'header.text'</em> {{ t("header.text") }}</h1>
    <p>String: "{{ subText }}" from prop</p>
    <p>String: "{{ rootStore.someString }}" from rootStore.someString</p>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/store.root";
import { useI18n } from "vue-i18n";

const { subText } = defineProps({
  subText: {
    type: String,
    default: "",
  },
});

const { t } = useI18n();
const rootStore = useRootStore();
</script>
