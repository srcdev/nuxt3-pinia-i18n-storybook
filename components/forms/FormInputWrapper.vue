<template>
  <div class="form-field-wrapper" :class="[{ error: fieldHasError }]">
    <div class="form-field-inner">
      <label :for="id" :class="['label', 'text-normal', { error: fieldHasError }]">{{ t(`${i18nKey}.label`) }}</label>
      <p v-if="fieldHasError" :class="['text-normal', 'error-message', { show: fieldHasError }, { hide: fieldHasError }]">{{ errorMessage }}</p>

      <slot name="default"></slot>

      <p>
        {{ t("components.forms.generic-text.hint", { hint: componentValidation.hint }) }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";
  import { useI18n } from "vue-i18n";

  import { validationConfig } from "./config/index";
  import { storeToRefs } from "pinia";
  import { useI18nStore } from "~/stores/store.i18n";

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    i18nKey: {
      type: String,
      required: true,
    },
    validation: {
      type: String,
      default: "",
    },
  });

  const { t } = useI18n();

  const { validatorLocale } = storeToRefs(useI18nStore());
  const componentValidation = validationConfig[validatorLocale.value][props.validation];

  const modelValue = defineModel() as unknown as IFormData;
  const { errorMessage, setDefaultError, fieldHasError } = useErrorMessage(props.id, modelValue.value);
  setDefaultError(t(`${props.i18nKey}.error-message`));
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .form-field {
    &-wrapper {
      background-color: $color-blue-3;
      border: 1px solid $color-blue-1;
      margin-top: 6px;

      &.error {
        background-color: $color-red-4;
        border: 1px solid $color-red-2;
      }
    }
  }
</style>
