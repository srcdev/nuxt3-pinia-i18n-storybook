<template>
  <div>
    <h1>{{ t('header.text') }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
definePageMeta({
  layout: false,
})
useHead({
  title: 'Home page',
  meta: [{ name: 'description', content: 'Desciption meta tag content' }],
  bodyAttrs: {
    class: 'class-to-apply-if-desired',
  },
})

const { t } = useI18n()
</script>

<style lang="scss">
// @import '@/assets/styles/imports.scss';
</style>
