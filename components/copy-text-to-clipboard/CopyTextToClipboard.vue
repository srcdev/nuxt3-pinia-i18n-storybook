<template>
  <div :class="['copy-text-to-clipboard', applyClasses]">
    <DisplayToast v-model="toastConfig"></DisplayToast>
    <template v-if="hasSummaryContent">
      <div class="summary">
        <slot name="summaryContent"></slot>
      </div>
    </template>

    <p class="nbrly-txt-sub-header nbrly-txt-semibold mb-12">{{ copyLabel }}</p>
    <div class="nbrly-copy-to-clipboard">
      <input type="text" :value="stringToCopy" disabled class="nbrly-txt-body clipboard-text" data-test-id="copy-string" />
      <button class="nbrl-copy-btn" @click.prevent="copyToClipboard()" @keydown.enter="copyToClipboard()">
        <span class="fa-regular fa-clone"></span>
        <span class="nbrly-txt-body nbrly-txt-semibold">{{ copyBtnText }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import { computedEager } from "@vueuse/core";
  // import { ToastCloseButton } from "#build/components";
  // import ToastCloseButton from "@/components/plugins/vue-toastification/ToastCloseButton.vue";
  // import { PluginOptions, POSITION, useToast } from "vue-toastification";

  import type { IToastConfig } from "@/types/types.displayToast";

  const props = defineProps({
    copyLabel: {
      type: String,
      default: "",
    },
    copyBtnText: {
      type: String,
      default: "",
    },
    toastSuccess: {
      type: String,
      default: "",
    },
    stringToCopy: {
      type: String,
      default: "",
    },
    useToastConfirm: {
      type: Boolean,
      default: true,
    },
    applyClasses: {
      type: String,
      default: "",
    },
  });

  const slots = useSlots();
  const showToast = ref(false);
  // const hasSummaryContent = computedEager(() => slots.summaryContent !== undefined);
  const hasSummaryContent = computed(() => slots.summaryContent !== undefined);

  // const toast = useToast();
  // const toastOptions: PluginOptions = {
  //   icon: "fa fa-check",
  //   position: POSITION.BOTTOM_CENTER,
  //   hideProgressBar: true,
  //   timeout: 5000,
  //   closeButton: ToastCloseButton,
  // };

  const toastConfig = ref<IToastConfig>({
    showToast: false,
    variant: "success",
    duration: 5000,
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.stringToCopy);
    // alert("Copy success");
    triggerToast();
    // if (useToastConfirm) {
    //   toast.success(toastSuccess, toastOptions);
    // }
  };

  const triggerToast = () => {
    toastConfig.value.showToast = true;
  };
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .nbrly-copy-to-clipboard {
    border: 1px solid $color-grey-7;
    border-radius: 8px;
    display: flex;
    padding: 6px 12px;
    width: 100%;

    .clipboard-text {
      background-color: transparent;
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

    .nbrl-copy-btn {
      border: 0;
      background-color: transparent;
      white-space: nowrap;

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: $color-grey-7;
        border-color: $color-grey-7;
        color: $color-grey-1;
      }

      [class^="fa"] {
        margin-right: 6px;
      }
    }
  }
</style>
