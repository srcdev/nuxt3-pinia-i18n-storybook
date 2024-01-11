<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="true" :apply-gutters="true">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">{{ $t("pages.display-qr-code.header") }}</h1>
            </div>
          </template>
        </PageRow>

        <PageRow :use-available-width="true" :apply-gutters="true" page-row-theme="theme-default" page-row-inner-theme="theme-default">
          <template #pageRowContent>
            <QrCode :config="qrCodeConfig" :qr-code-size="350" :show-copy-to-clipboard="true" apply-classes="custom-class-name"></QrCode>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import type { IQrCodeConfig, IQrCodeColours } from "@/types/types.qrCode";

  definePageMeta({
    layout: false,
  });

  useHead({
    title: "Home page",
    meta: [{ name: "description", content: "Desciption meta tag content" }],
    bodyAttrs: {
      class: "",
    },
  });

  const { t } = useI18n();

  const qrCodeConfig = <IQrCodeConfig>{
    qrCodeStr: t("pages.display-qr-code.qrCodeConfig.qrCodeStr"),
    manualCodeStr: t("pages.display-qr-code.qrCodeConfig.manualCodeStr"),
    copyLabel: t("pages.display-qr-code.qrCodeConfig.copyLabel"),
    copyBtnText: t("pages.display-qr-code.qrCodeConfig.copyBtnText"),
    toastSuccess: t("pages.display-qr-code.qrCodeConfig.toastSuccess"),
    summaryContent: t("pages.display-qr-code.qrCodeConfig.summaryContent"),
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
