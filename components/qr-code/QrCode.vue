<template>
  <DisplayFlexGroup flex-flow="column" align-content="top-left" gap="0" apply-classes="qr-code">
    <template #default>
      <DisplayFlexGroupItem>
        <template #default>
          <div v-if="config.qrCodeStr !== ''">
            <img :src="qrcode" :alt="t('components.qrCode.imgAltText')" class="qr-code-image" :class="styleClassPassthrough" :height="qrCodeSize" :width="qrCodeSize" data-test-id="qrCodeImage" />
          </div>
          <div v-else>
            <p class="nbrly-txt-nav-item-description mt-0 mb-12">ELSE</p>
          </div>
        </template>
      </DisplayFlexGroupItem>

      <DisplayFlexGroupItem v-if="showCopyToClipboard" apply-classes="qr-code-clipboard" data-test-id="qrCodeClipboard">
        <template #default>
          <fieldset class="text-divider mb-32 mt-32">
            <legend class="text-divider-legend">{{ t("components.qrCode.dividerWords") }}</legend>
          </fieldset>

          <CopyTextToClipboard :config="copyTextToClipboardConfig">
            <template #summaryContent>
              <p class="nbrly-txt-nav-item-description mt-0 mb-12">{{ config.summaryContent }}</p>
            </template>
          </CopyTextToClipboard>
        </template>
      </DisplayFlexGroupItem>
    </template>
  </DisplayFlexGroup>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";
  import { useQRCode } from "@vueuse/integrations/useQRCode";
  import type { IQrCodeConfig, IQrCodeColours } from "@/types/types.qrCode";
  import type { ICopyTextConfig } from "@/types/types.copyTextToClipboard";

  const props = defineProps({
    qrCodeSize: {
      type: Number,
      default: 150
    },
    showCopyToClipboard: {
      type: Boolean,
      default: true
    },
    config: {
      // type: Object as PropType<IQrCodeConfig>,
      // type: Object as PropType<{}>,
      type: Object,
      default() {
        return {};
      }
    },
    qrColours: {
      // type: Object as PropType<IQrCodeColours>,
      // type: Object as PropType<{}>,
      type: Object,
      default() {
        return {
          dark: "#000000",
          light: "#ffffff"
        };
      }
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const { t } = useI18n();

  const qrcode = useQRCode(props.config.qrCodeStr, {
    errorCorrectionLevel: "H",
    type: "image/svg",
    margin: 1,
    width: props.qrCodeSize,
    color: {
      dark: "#000000ff",
      light: "#ffffffff"
    }
  });

  const copyTextToClipboardConfig = ref<ICopyTextConfig>({
    copyLabel: props.config.copyLabel,
    copyBtnText: props.config.copyBtnText,
    toastDisplayText: props.config.toastSuccess,
    stringToCopy: props.config.manualCodeStr,
    useToastConfirm: true,
    styleClassPassthrough: "customClass"
  });

  const qrCssWidth = computed(() => {
    return `${props.qrCodeSize}px`;
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .qr-code {
    background-color: var(--color-white);
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
    border-color: var(--color-grey-7);
    border-width: 1px 0 0 0;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    text-align: center;

    &-legend {
      color: var(--color-grey-7);
      background-color: var(--color-white);
      font-size: 12px;
      font-weight: 600;
      line-height: 24px;
      margin-left: 0;
      margin-right: 0;
      padding: 0 12px;
    }
  }
</style>
