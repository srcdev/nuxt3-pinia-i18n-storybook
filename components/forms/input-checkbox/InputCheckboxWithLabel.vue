<template>
  <label :for="id" class="form-field-label header-small" :class="[{ error: fieldHasError }]">
    <InputCheckboxCore :id="id" :name="name" :true-value="trueValue" :required="required" :multiple-checkboxes="useConfig" v-model="modelValue" />
    <span>{{ label }}</span>
  </label>
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

  const modelValue = defineModel() as Ref<IFormData>;
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

  .form-field-label {
    display: inline-flex;
    gap: 12px;
    font-variation-settings: "wght" 500;
    padding: 4px;
    border: var(--border-width) solid var(--_border-color, transparent);

    &:hover,
    &:focus-within {
      outline: 2px solid var(--color-black);

      --_bg-color: white;
      --_outline-color: var(--color-blue-2);
      --_border-color: var(--color-grey-12);
      background-color: var(--_bg-color, --color-white);
      outline: var(--border-width) solid var(--_outline-color, transparent);
      border-radius: var(--border-radius);
    }
  }

  // .form-field {
  // &-wrapper {
  //   &.decorated {
  //     border-left: 3px solid var(--color-blue-1);
  //     border-bottom: 1px solid var(--color-blue-1);
  //     margin-bottom: 12px;

  //     background: rgb(5, 112, 193);
  //     background: linear-gradient(13deg, rgba(5, 112, 193, 0.21054359243697474) 0%, rgba(251, 251, 251, 0) 41%);

  //     transition: all ease-in-out 200ms;

  //     &.error {
  //       border-left: 3px solid var(--color-red-2);
  //       border-bottom: 1px solid var(--color-red-2);

  //       background: rgb(210, 28, 41);
  //       background: linear-gradient(13deg, rgba(210, 28, 41, 0.21054359243697474) 0%, rgba(251, 251, 251, 0) 41%);
  //     }
  //   }
  // }

  // &-inner {
  //   margin-left: 6px;
  // }
  // &-error-message {
  //   display: flex;
  //   align-items: center;
  //   color: var(--color-red-2);
  //   .icon {
  //     display: inline-block;
  //     color: var(--color-red-2);
  //     margin-right: 10px;
  //   }

  //   &.show {
  //     animation: fadeIn ease-out 200ms;
  //     color: var(--color-red-5);
  //   }
  // }
  // &-info {
  //   display: flex;
  //   align-items: center;
  //   padding: 10px 0;

  //   @media only screen and (min-width: $tabletMed) {
  //     padding: 12px 0;
  //   }

  //   .icon {
  //     display: inline-block;
  //     margin-right: 10px;
  //   }
  // }

  // &-label {
  //   display: flex;
  //   gap: 12px;
  //   font-variation-settings: "wght" 500;
  //   padding: 10px 0 10px 28px;
  //   transform: translateX(-32px);

  //   @media only screen and (min-width: $tabletMed) {
  //     padding: 12px 0 12px 28px;
  //   }

  //   &.hover,
  //   &.focus-within {
  //     border-color: var(--color-red-2);
  //     border-width: 4px;
  //   }
  // }

  // &-input {
  //   &-wrapper {
  //     width: initial;

  //     // @media only screen and (min-width: $tabletMed) {
  //     //   width: 270px;
  //     // }
  //   }
  // }
  // }
</style>
