<template>
  <input
    :type
    :placeholder="t(`${i18nKey}.placeholder`)"
    :id
    :name
    :pattern="componentValidation.pattern"
    :maxlength="componentValidation.maxlength"
    :required
    :class="['input-text', 'text-normal', { error: fieldHasError() }]"
    v-model="modelValue.data[name]"
    ref="inputField"
    @focusin="isFocused = true"
    @focusout="isFocused = false"
  />
</template>

<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";
  import { validationConfig } from "@/components/forms/config/index";
  import { storeToRefs } from "pinia";

  const props = defineProps({
    type: {
      // type: String as PropType<"text" | "password" | "tel" | "number" | "email" | "url">, // This breaks props setup in unit tests
      type: String,
      validator(value: string) {
        return ["text", "password", "tel", "number", "email", "url"].includes(value);
      }
    },
    id: {
      // type: String as PropType<string>,
      type: String,
      required: true
    },
    name: {
      type: String,
      default: null
    },
    validation: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      value: false
    },
    isPending: {
      type: Boolean,
      value: false
    },
    i18nKey: {
      type: String,
      required: true
    }
  });

  // const type = computed(() => props.type);

  const { t } = useI18n();
  const modelValue = defineModel() as Ref<IFormData>;
  const isFocused = defineModel("isFocused") as Ref<boolean>;

  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });
  const { validatorLocale } = storeToRefs(useI18nStore());

  const componentValidation = validationConfig[validatorLocale.value][props.validation];
  const inputField = ref<HTMLInputElement | null>(null);

  const { hasCustomError, removeCustomError } = useErrorMessage(name.value, modelValue);

  const fieldHasError = () => {
    const hasApiErrorMessage = hasCustomError();
    const inputBad = !inputField.value?.validity.valid;

    if (modelValue.value.isPending) {
      modelValue.value!.validityState[name.value] = inputField.value?.validity.valid ?? false;
      return hasApiErrorMessage ? hasApiErrorMessage : inputBad;
    }
    return false;
  };

  // onUpdated(() => {
  //   console.log(`onUpdated(${name.value})`);
  //   modelValue.value!.validityState[name.value] = inputField.value?.validity.valid;
  //   if (hasCustomError()) {
  //   updateCustomErrors(name.value, null);
  //   }
  // });

  // watch(
  //   () => type.value,
  //   () => {
  //     console.log(`InputTextCore > watch type > (${type.value})`);
  //   }
  // );

  const isValid = () => {
    setTimeout(() => {
      modelValue.value!.validityState[name.value] = inputField.value?.validity.valid ?? false;
    }, 0);
  };

  // Keep an eye on this for performance issue
  watch(
    () => modelValue.value.data[name.value],
    () => {
      modelValue.value!.validityState[name.value] = inputField.value?.validity.valid ?? false;
      if (hasCustomError()) {
        removeCustomError(inputField.value?.validity.valid);
      }
    },
    { deep: true }
  );

  onMounted(() => {
    isValid();
  });
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .input {
    &-text {
      // border: 1px solid var(--color-white);
      // outline: 1px solid var(--color-black);
      // border-radius: 2px;
      // box-shadow: none;
      transition: all linear 200ms;
      padding-left: 4px;
      width: 100%;

      &[readonly] {
        // background-color: var(--color-blue-2);
      }

      &-primary {
        // background-color: var(--color-white);
        // color: var(--color-grey-1);

        @media (prefers-color-scheme: dark) {
          // background-color: var(--color-grey-4);
          color: var(--color-grey-4);
        }
      }

      // &:hover {
      //   border-color: var(--color-black);
      // }

      // &.error {
      //   color: var(--color-red-5);
      //   border: 1px solid var(--color-red-2);
      //   outline: 1px solid var(--color-red-5);
      // }
    }
  }
</style>
