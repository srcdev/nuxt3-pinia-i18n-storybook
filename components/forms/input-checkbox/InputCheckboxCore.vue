<template>
  <div class="input-element-wrapper">
    <input
      type="checkbox"
      @input="isValid()"
      :true-value="trueValue"
      :false-value="falseValue"
      :id
      :name
      :required="props.required && !props.multipleCheckboxes"
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

  const isChecked = computed(() => {
    if (isArray) {
      if (name.value in modelValue.value.data) {
        const keyValue = modelValue.value.data[name.value] as any[];
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
      if (props.multipleCheckboxes) {
        const tempArr = toRaw(modelValue.value?.data?.[name.value]) as any[];
        modelValue.value!.validityState[name.value] = props.required && tempArr.length > 0;
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

  .input-element-wrapper {
    position: relative;

    .icon-box {
      height: 28px;
      width: 28px;
    }
  }

  .input-checkbox {
    position: absolute;
    left: -9999px;

    &[readonly] {
      background-color: var(--color-blue-2);
    }

    .input-checkbox-primary {
      background-color: var(--color-white);
      // color: var(--color-grey-1);

      @media (prefers-color-scheme: dark) {
        background-color: var(--color-grey-4);
        // color: var(--color-grey-4);
      }
    }

    &.error {
      color: var(--color-red-5);
      border: 1px solid var(--color-red-2);
      outline: 1px solid var(--color-red-5);
    }
  }
</style>
