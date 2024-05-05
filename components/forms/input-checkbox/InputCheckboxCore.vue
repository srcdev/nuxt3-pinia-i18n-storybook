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

  interface checkBoxValues {
    [key: string]: boolean;
  }

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
      type: [String, Number, Boolean],
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
  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });
  const inputField = ref<HTMLInputElement | null>(null);
  const isArray = Array.isArray(modelValue.value.data[name.value]);
  const typeOfData = typeof modelValue.value.data[name.value];

  const isChecked = computed(() => {
    if (typeOfData === "object") {
      // console.log(`objectKeys:`, objectKeys);
      // console.log(`InputCheckboxCore > modelValue.value.data:`, modelValue.value.data[name.value], props.trueValue);
      // return modelValue.value.data ? [name.value].length > 0 : false;
      // return modelValue.value.data[name.value].includes(props.trueValue);

      if (name.value in modelValue.value.data) {
        const keyValue = modelValue.value.data[name.value] as object;
        // console.log(typeof keyValue);
        return keyValue.indexOf(props.trueValue) > -1;
      }
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

  onMounted(() => {
    isValid();
  });
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .input {
    &-checkbox {
      position: absolute;
      z-index: -1;

      &[readonly] {
        background-color: var(--color-blue-2);
      }

      &-primary {
        background-color: var(--color-white);
        // color: var(--color-grey-1);

        @media (prefers-color-scheme: dark) {
          background-color: var(--color-grey-4);
          // color: var(--color-grey-4);
        }
      }

      &:hover {
        border-color: var(--color-black);
      }

      &.error {
        color: var(--color-red-5);
        border: 1px solid var(--color-red-2);
        outline: 1px solid var(--color-red-5);
      }
    }
  }
</style>
