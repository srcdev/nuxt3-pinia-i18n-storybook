<template>
  <div class="form-field-wrapper decorated" :class="[{ error: fieldHasError }]">
    <div class="form-field-inner">
      <FlexGroup flex-flow="cols-to-row" align-content="center-left" :full-width="true">
        <template #default>
          <FlexGroupItem :flex-grow="true" style-class-passthrough="form-field-label-wrapper">
            <template #default>
              <label :for="id" class="form-field-label header-small wght-700" :class="[{ error: fieldHasError }]">{{ t(`${i18nKey}.label`) }}</label>
            </template>
          </FlexGroupItem>
          <FlexGroupItem :flex-grow="false" style-class-passthrough="form-field-input-wrapper">
            <InputTextCore type="text" :id="id" :validation="validation" :required="required" v-model:modelValue="modelValue" :i18n-key="i18nKey" />
          </FlexGroupItem>
        </template>
      </FlexGroup>

      <p :class="['text-normal', 'form-field-error-message', 'wght-700', { show: fieldHasError }]"><Icon name="akar-icons:triangle-alert" class="icon icon-triangle-alert" />{{ errorMessage }}</p>
      <p class="form-field-info"><Icon name="akar-icons:info" class="icon icon-info" />{{ t("components.forms.generic-text.hint", { hint: componentValidation.hint }) }}</p>
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
    name: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    validation: {
      type: String,
      default: "",
    },
  });

  const { t } = useI18n();
  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });

  const { validatorLocale } = storeToRefs(useI18nStore());
  const componentValidation = validationConfig[validatorLocale.value][props.validation];

  const modelValue = defineModel() as unknown as IFormData;
  const { errorMessage, setDefaultError, fieldHasError } = useErrorMessage(name.value, modelValue.value);
  setDefaultError(t(`${props.i18nKey}.error-message`));
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  @keyframes fadeIn {
    0% {
      opacity: 0;
      height: 0;
      overflow: hidden;
    }
    100% {
      height: 3.4rem;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      height: 3.4rem;
      opacity: 1;
      overflow: hidden;
    }
    100% {
      opacity: 0;
      height: 0;
    }
  }

  .form-field {
    &-wrapper {
      &.decorated {
        border-left: 3px solid $color-blue-1;
        border-bottom: 1px solid $color-blue-1;
        margin-bottom: 12px;

        background: rgb(5, 112, 193);
        background: linear-gradient(13deg, rgba(5, 112, 193, 0.21054359243697474) 0%, rgba(251, 251, 251, 0) 41%);

        transition: all ease-in-out 200ms;

        &.error {
          border-left: 3px solid $color-red-2;
          border-bottom: 1px solid $color-red-2;

          background: rgb(210, 28, 41);
          background: linear-gradient(13deg, rgba(210, 28, 41, 0.21054359243697474) 0%, rgba(251, 251, 251, 0) 41%);
        }
      }
    }

    &-inner {
      margin-left: 6px;
    }
    &-error-message {
      display: flex;
      align-items: center;
      color: $color-red-2;

      opacity: 0;
      height: 0;
      overflow: hidden;
      transition: all linear 200ms;

      transform: translateY(-1rem);

      .icon {
        display: inline-block;
        color: $color-red-2;
        margin-right: 10px;
      }

      &.show {
        // animation: fadeIn ease-out 200ms;
        opacity: 1;
        height: 3.4rem;
        overflow: hidden;

        transform: translateY(0);
        color: $color-red-5;
      }

      &.hide {
        // animation: fadeOut ease-out 200ms;
        color: $color-red-5;
      }
    }
    &-info {
      display: flex;
      align-items: center;
      padding: 10px 0;

      @media only screen and (min-width: $tabletMed) {
        padding: 12px 0;
      }

      .icon {
        display: inline-block;
        margin-right: 10px;
      }
    }

    &-label {
      display: block;
      padding: 10px 0;

      @media only screen and (min-width: $tabletMed) {
        padding: 12px 0;
      }

      &-wrapper {
      }
    }

    &-input {
      &-wrapper {
        width: 100%;
        // max-width: 300px;
        @media only screen and (min-width: $tabletMed) {
          max-width: 300px;
        }
      }
    }
  }
</style>
