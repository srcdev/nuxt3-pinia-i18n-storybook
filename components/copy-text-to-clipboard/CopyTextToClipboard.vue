<template>
  <div :class="['copy-text-to-clipboard', config.styleClassPassthrough]" data-test-id="copyTextToClipboard">
    <DisplayToast v-model="toastConfig" style-class-passthrough="top full-width"></DisplayToast>
    <template v-if="hasSummaryContent">
      <div class="summary" data-test-id="copyTextToClipboard-summary">
        <slot name="summaryContent"></slot>
      </div>
    </template>

    <p class="txt-sub-header txt-semibold mb-12">{{ config.copyLabel }}</p>
    <div class="copy-to-clipboard">
      <InputTextReadOnlyCore type="text" variant="ghost" v-model="config.stringToCopy" />
      <IconButtonCopyOutline @click.prevent="copyToClipboard()" @keydown.enter="copyToClipboard()" :button-text="config.copyBtnText" size="medium" style-class-passthrough="copy-btn" />
    </div>
  </div>
</template>

<script setup lang="ts">
  // import { useSlots } from "vue"; // Added for Storybook support
  import type { IToastConfig } from "@/types/types.displayToast";
  import type { ICopyTextConfig } from "@/types/types.copyTextToClipboard";

  const props = defineProps({
    config: {
      type: Object as PropType<ICopyTextConfig>,
      default() {
        return {};
      }
    }
  });

  const slots = useSlots();
  const hasSummaryContent = computed(() => slots.summaryContent !== undefined);

  const toastConfig = ref<IToastConfig>({
    showToast: false,
    variant: "success",
    duration: 5000,
    toastDisplayText: props.config.toastDisplayText
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.config.stringToCopy);
    triggerToast();
  };

  const triggerToast = () => {
    toastConfig.value.showToast = true;
  };
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .copy-to-clipboard {
    background-color: white;
    border: 1px solid $color-grey-7;
    border-radius: 8px;
    display: flex;
    padding: 6px 12px;
    width: 100%;

    .clipboard-text {
      background-color: white;
      border: none;
      flex-grow: 1;
      outline: none;
      overflow: hidden;
      text-overflow: ellipsis;
      text-wrap: nowrap;

      &:focus {
        outline: none;
      }
    }

    .copy-btn {
      border: 0;
      // background-color: transparent;
      white-space: nowrap;

      // &:hover,
      // &:focus {
      //   cursor: pointer;
      //   background-color: $color-grey-7;
      //   border-color: $color-grey-7;
      //   color: var(--color-grey-1);
      // }
    }
  }
</style>
