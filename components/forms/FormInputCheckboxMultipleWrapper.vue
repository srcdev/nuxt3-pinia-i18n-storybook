<template>
  <div class="form-field-wrapper decorated" :class="[{ error: fieldHasError }]">
    <div class="form-field-inner">
      <slot v-if="hasTitle" name="inputTitle"></slot>
      <div>
        <FlexGroup flex-flow="row-reverse" align-content="center-left" gap="12px" :full-width="false">
          <template #default>
            <FlexGroupItem apply-classes="form-field-label-wrapper">
              <template #default>
                <label :for="id" class="form-field-label header-small" :class="[{ error: fieldHasError }]">{{ t(`${i18nKey}.label`) }}</label>
              </template>
            </FlexGroupItem>
            <FlexGroupItem apply-classes="form-field-input-wrapper">
              <template #default>
                <FormInputCheckbox :id="id" true-value="Sure" false-value="Nope" :required="required" v-model="modelValue" />
              </template>
            </FlexGroupItem>
          </template>
        </FlexGroup>
      </div>

      <p v-if="fieldHasError" :class="['text-normal', 'form-field-error-message', { show: fieldHasError }, { hide: !fieldHasError }]"><Icon name="akar-icons:triangle-alert" class="icon icon-triangle-alert" />{{ errorMessage }}</p>
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
    required: {
      type: Boolean,
      value: false,
    },
  });

  const { t } = useI18n();
  const slots = useSlots();
  const hasTitle = computed(() => slots.inputTitle !== undefined);

  const { validatorLocale } = storeToRefs(useI18nStore());
  const componentValidation = validationConfig[validatorLocale.value][props.validation];

  const modelValue = defineModel() as unknown as IFormData;
  const { errorMessage, setDefaultError, fieldHasError } = useErrorMessage(props.id, modelValue.value);
  setDefaultError(t(`${props.i18nKey}.error-message`));
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  @keyframes fadeIn {
    0% {
      opacity: 0;
      height: 0;
      overflow: hidden;
    }
    100% {
      height: 34px;
      opacity: 1;
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
      font-weight: bolder;
      .icon {
        display: inline-block;
        color: $color-red-2;
        margin-right: 10px;
      }

      &.show {
        animation: fadeIn ease-out 200ms;
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
      font-weight: bolder;
      padding: 10px 0;

      @media only screen and (min-width: $tabletMed) {
        padding: 12px 0;
      }

      &-wrapper {
      }
    }

    &-input {
      &-wrapper {
        width: initial;

        // @media only screen and (min-width: $tabletMed) {
        //   width: 270px;
        // }
      }
    }
  }
</style>
