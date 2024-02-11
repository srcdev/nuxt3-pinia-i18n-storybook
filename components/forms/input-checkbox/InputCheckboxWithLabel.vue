<template>
  <FlexGroup flex-flow="row-reverse" align-content="center-left" gap="12px" :full-width="false">
    <template #default>
      <FlexGroupItem style-class-passthrough="form-field-label-wrapper">
        <template #default>
          <label :for="id" class="form-field-label header-small" :class="[{ error: fieldHasError }]">{{ label }}</label>
        </template>
      </FlexGroupItem>
      <FlexGroupItem style-class-passthrough="form-field-input-wrapper">
        <template #default>
          <InputCheckboxCore :id="id" :name="name" :true-value="trueValue" :required="required" :multiple-checkboxes="useConfig" v-model="modelValue" />
        </template>
      </FlexGroupItem>
    </template>
  </FlexGroup>
</template>
<script setup lang="ts">
  import type { IFormData, IOptionsConfig } from "@/types/types.forms";
  import { useI18n } from "vue-i18n";

  const props = defineProps({
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    i18nKey: {
      type: String,
      required: true
    },
    validation: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    config: {
      type: Object as PropType<IOptionsConfig>,
      default: {}
    }
  });

  const { t } = useI18n();

  const useConfig = computed(() => {
    return Object.keys(props.config).length > 0;
  });

  const id = computed(() => {
    return useConfig.value ? props.config.id : props.id;
  });

  const name = computed(() => {
    return useConfig.value ? props.config.name : props.name;
  });

  const label = computed(() => {
    return useConfig.value ? props.config.label : t(`${props.i18nKey}.label`);
  });

  const trueValue = computed(() => {
    return useConfig.value ? props.config.value : props.trueValue;
  });

  const modelValue = defineModel() as unknown as IFormData;
  const { setDefaultError, fieldHasError } = useErrorMessage(props.id, modelValue);
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
      font-variation-settings: "wght" 500;
      padding: 10px 0 10px 28px;
      transform: translateX(-32px);

      @media only screen and (min-width: $tabletMed) {
        padding: 12px 0 12px 28px;
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
