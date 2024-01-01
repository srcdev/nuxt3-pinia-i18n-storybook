<template>
  <div>
    <label :for="id" :class="['label', 'text-normal', { error: !isValid }]">{{ placeholder }} </label>
    <br />
    <input :type="type" :placeholder="placeholder" :id="id" :pattern="validationPatterns.pattern" :maxlength="validationPatterns.maxlength" :required="required" class="input text-normal" v-model="modelValue.data[id]" ref="inputField" />
    <p>
      <strong>({{ t(`components.forms.generic-text.hint`) }})</strong> {{ validationPatterns.hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { IValidationPatterns, IFormData } from "@/types/types.forms";
  import { useI18n } from "vue-i18n";

  // import { type PropType } from "vue";
  const props = defineProps({
    type: {
      // type: String as PropType<String>,
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
    placeholder: {
      type: String,
      default: "",
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
  });

  const modelValue = defineModel();

  const { t } = useI18n();

  const validationPatterns = <IValidationPatterns>{
    pattern: t(`components.forms.validation-patterns.${props.validation}.pattern`),
    minlength: t(`components.forms.validation-patterns.${props.validation}.minlength`),
    maxlength: t(`components.forms.validation-patterns.${props.validation}.maxlength`),
    hint: t(`components.forms.validation-patterns.${props.validation}.hint`),
  };

  const inputField = ref<HTMLInputElement | null>(null);
  const isValid = ref(true);

  watch(
    () => modelValue.value,
    () => {
      // console.log(`formData:`, modelValue.value);
      // console.log(inputField.value?.validity.valid);
      modelValue.value!.validityState[props.id] = inputField.value?.validity;
      isValid.value = inputField.value?.validity.valid;
    },
    { deep: true }
  );
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .input {
    border: 1px solid $color-white;
    outline: 1px solid $color-black;
    border-radius: 2px;
    box-shadow: none;
    // font-size: clamp(1.2rem, 4vw, 1.4rem);
    transition: all linear 200ms;
    padding-left: 4px;

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
      outline: 1px solid $color-red-5;
    }
  }

  .label {
    display: block;
    // font-size: clamp(1.2rem, 4vw, 1.4rem);
    padding: 6px 0;
  }
</style>
