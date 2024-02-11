<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="true">
          <template #default>
            <div>
              <h1 class="text-header-large">{{ $t("pages.display-qr-code.header") }}</h1>
            </div>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="true" display-row-theme="theme-default" display-row-inner-theme="theme-default">
          <template #default>
            <QrCode :config="qrCodeConfig" :qr-code-size="250" :show-copy-to-clipboard="true" apply-classes="custom-class-name"></QrCode>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IQrCodeConfig, IQrCodeColours } from "@/types/types.qrCode";

  definePageMeta({
    layout: false
  });

  useHead({
    title: "Home page",
    meta: [{ name: "description", content: "Desciption meta tag content" }],
    bodyAttrs: {
      class: ""
    }
  });

  const { t } = useI18n();

  const qrCodeConfig = <IQrCodeConfig>{
    qrCodeStr: t("pages.display-qr-code.qrCodeConfig.qrCodeStr"),
    manualCodeStr: t("pages.display-qr-code.qrCodeConfig.manualCodeStr"),
    copyLabel: t("pages.display-qr-code.qrCodeConfig.copyLabel"),
    copyBtnText: t("pages.display-qr-code.qrCodeConfig.copyBtnText"),
    toastDisplayText: t("pages.display-qr-code.qrCodeConfig.toastDisplayText"),
    summaryContent: t("pages.display-qr-code.qrCodeConfig.summaryContent")
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
