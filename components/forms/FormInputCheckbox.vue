<template>
  <div>
    <input type="checkbox" :true-value="trueValue" :false-value="falseValue" :id="id" :required="required" :class="['input-checkbox', { error: fieldHasError() }]" v-model="modelValue.data[id]" ref="inputField" />
    <Icon :name="isChecked ? 'akar-icons:check-box' : 'akar-icons:box'" class="icon-box" />
  </div>
</template>

<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      value: false,
    },
    isPending: {
      type: Boolean,
      value: false,
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false,
    },
  });

  const modelValue = defineModel() as unknown as IFormData;
  const inputField = ref<HTMLInputElement | null>(null);

  const isChecked = ref<undefined | boolean>(false);

  const fieldHasError = () => {
    return !inputField.value?.validity.valid && modelValue.value.doSubmit;
  };

  watch(
    () => modelValue.value,
    () => {
      isChecked.value = inputField.value?.checked;
      modelValue.value!.validityState[props.id] = inputField.value?.validity.valid;
    },
    { deep: true }
  );
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .input {
    &-checkbox {
      position: absolute;
      z-index: -1;

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
