<template>
  <input
    :type="type"
    :placeholder="t(`${i18nKey}.placeholder`)"
    :id="id"
    :name="name"
    :pattern="componentValidation.pattern"
    :maxlength="componentValidation.maxlength"
    :required="required"
    :class="['input-text', 'text-normal', { error: fieldHasError() }]"
    v-model="modelValue.data[name]"
    ref="inputField"
  />
</template>

<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";
  import { validationConfig } from "./config/index";
  import { useI18n } from "vue-i18n";
  import { storeToRefs } from "pinia";
  import { useI18nStore } from "~/stores/store.i18n";

  const props = defineProps({
    type: {
      type: String,
      default: "text",
      validator(value: string) {
        return ["text", "password", "tel", "number", "email", "url"].includes(value);
      },
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: null,
    },
    validation: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      value: false,
    },
    isPending: {
      type: Boolean,
      value: false,
    },
    i18nKey: {
      type: String,
      required: true,
    },
  });

  const { t } = useI18n();
  const modelValue = defineModel() as unknown as IFormData;
  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });
  const { validatorLocale } = storeToRefs(useI18nStore());
  const componentValidation = validationConfig[validatorLocale.value][props.validation];
  const inputField = ref<HTMLInputElement | null>(null);

  const fieldHasError = () => {
    return !inputField.value?.validity.valid && modelValue.value.doSubmit;
  };

  watch(
    // () => modelValue.value.data[name.value],
    () => modelValue.value,
    () => {
      modelValue.value!.validityState[name.value] = inputField.value?.validity.valid;
    },
    { deep: true }
  );
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .input {
    &-text {
      border: 1px solid $color-white;
      outline: 1px solid $color-black;
      border-radius: 2px;
      box-shadow: none;
      // font-size: clamp(1.2rem, 4vw, 1.4rem);
      transition: all linear 200ms;
      padding-left: 4px;
      width: 100%;

      &[readonly] {
        background-color: $color-blue-2;
      }

      &-primary {
        background-color: $color-white;
        // color: $color-grey-1;

        @media (prefers-color-scheme: dark) {
          background-color: $color-grey-4;
          // color: $color-grey-4;
        }
      }

      &:hover {
        border-color: $black;
      }

      &.error {
        color: $color-red-5;
        border: 1px solid $color-red-2;
        outline: 1px solid $color-red-5;
      }
    }
  }
</style>
