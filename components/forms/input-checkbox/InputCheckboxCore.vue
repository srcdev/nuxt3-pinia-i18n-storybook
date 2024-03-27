<template>
  <div>
    <input
      type="checkbox"
      @input="isValid()"
      :true-value="trueValue"
      :false-value="falseValue"
      :id="id"
      :name="String(name)"
      :required="required"
      :value="trueValue"
      :class="['input-checkbox', { error: fieldHasError() }]"
      v-model="modelValue.data[name]"
      ref="inputField"
    />
    <Icon :name="isChecked ? 'akar-icons:check-box' : 'akar-icons:box'" class="icon-box" />
  </div>
</template>

<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      value: false
    },
    isPending: {
      type: Boolean,
      value: false
    },
    trueValue: {
      type: [String, Number, Boolean] as PropType<string | number | boolean>,
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    multipleCheckboxes: {
      type: Boolean,
      default: false
    }
  });

  const modelValue = defineModel() as Ref<IFormData>;
  const name = computed<string | number>(() => {
    return props.name !== null ? props.name : props.id;
  });
  const inputField = ref<HTMLInputElement | null>(null);
  const isArray = Array.isArray(modelValue.value.data[name.value]);

  const isChecked = computed(() => {
    if (isArray) {
      return modelValue.value.data ? [name.value].length > 0 : false;
    } else {
      return modelValue.value.data[name.value] === props.trueValue;
    }
  });

  const fieldHasError = () => {
    return !inputField.value?.validity.valid && modelValue.value.isPending;
  };

  const isValid = () => {
    setTimeout(() => {
      if (isArray) {
        modelValue.value!.validityState[name.value] = modelValue.value.data ? [name.value].length > 0 : false;
      } else {
        modelValue.value!.validityState[name.value] = inputField.value?.validity.valid ?? false;
      }
    }, 0);
  };

  onUpdated(() => {
    modelValue.value!.validityState[name.value] = inputField.value?.validity.valid ?? false;
  });
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
