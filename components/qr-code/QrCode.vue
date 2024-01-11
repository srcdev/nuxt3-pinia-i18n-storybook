<template>
  <FlexGroup flex-flow="column" align-content="top-left" gap="0" apply-classes="qr-code">
    <template #default>
      <FlexGroupItem>
        <template #default>
          <div v-if="config.qrCodeStr !== ''">
            <img :src="qrcode" :alt="t('components.qrCode.imgAltText')" loading="lazy" class="qr-code-image" :class="applyClasses" :height="qrCodeSize" :width="qrCodeSize" data-test-id="qrCodeImage" />
          </div>
          <div v-else>
            <p class="nbrly-txt-nav-item-description mt-0 mb-12">ELSE</p>
          </div>
        </template>
      </FlexGroupItem>

      <FlexGroupItem v-if="showCopyToClipboard" apply-classes="qr-code-clipboard" data-test-id="qrCodeClipboard">
        <template #default>
          <fieldset class="text-divider mb-32 mt-32">
            <legend class="text-divider-legend">{{ t("components.qrCode.dividerWords") }}</legend>
          </fieldset>

          <CopyTextToClipboard :copy-label="config.copyLabel" :copy-btn-text="config.copyBtnText" :toast-success="config.toastSuccess" :string-to-copy="config.manualCodeStr" :use-toast-confirm="true">
            <template #summaryContent>
              <p class="nbrly-txt-nav-item-description mt-0 mb-12">{{ config.summaryContent }}</p>
            </template>
          </CopyTextToClipboard>
        </template>
      </FlexGroupItem>
    </template>
  </FlexGroup>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";
  import { useQRCode } from "@vueuse/integrations/useQRCode";
  import type { IQrCodeConfig, IQrCodeColours } from "@/types/types.qrCode";

  const props = defineProps({
    qrCodeSize: {
      type: Number,
      default: 150,
    },
    showCopyToClipboard: {
      type: Boolean,
      default: true,
    },
    config: {
      type: Object as PropType<IQrCodeConfig>,
      default() {
        return {};
      },
    },
    qrColours: {
      type: Object as PropType<IQrCodeColours>,
      default() {
        return {
          dark: "#000",
          light: "#fff",
        };
      },
    },
    applyClasses: {
      type: String,
      default: "",
    },
  });

  const { t } = useI18n();

  const qrcode = useQRCode(props.config.qrCodeStr, {
    errorCorrectionLevel: "H",
    type: "image/svg",
    margin: 1,
    width: props.qrCodeSize,
    color: props.qrColours,
  });

  const qrCssWidth = computed(() => {
    return `${props.qrCodeSize}px`;
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .qr-code {
    background-color: $color-white;
    &-image {
      aspect-ratio: 1;
      width: v-bind(qrCssWidth);
    }
    &-clipboard {
      margin: 0;
      width: 100%;
    }
  }

  .text-divider {
    border-color: $color-grey-7;
    border-width: 1px 0 0 0;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    text-align: center;

    &-legend {
      color: $color-grey-7;
      background-color: $color-white;
      font-size: 12px;
      font-weight: 600;
      line-height: 24px;
      margin-left: 0;
      margin-right: 0;
      padding: 0 12px;
    }
  }
</style>
