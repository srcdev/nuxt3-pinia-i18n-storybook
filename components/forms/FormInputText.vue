<template>
  <div>
    <label :for="id" :class="['label', 'text-normal', { error: hasError() }]">{{ placeholder }}</label>
    <br />
    <input
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :pattern="validationPatterns.pattern"
      :maxlength="validationPatterns.maxlength"
      :required="required"
      :class="['input', 'text-normal', { error: hasError() }]"
      v-model="modelValue.data[id]"
      ref="inputField"
    />
    <p>
      {{ t("components.forms.generic-text.hint", { hint: validationPatterns.hint }) }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";
  import { validationConfig } from "./config/index";
  import { useI18n } from "vue-i18n";
  import { storeToRefs } from "pinia";
  import { useI18nStore } from "~/stores/store.i18n";

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

  const { t } = useI18n();
  const modelValue = defineModel() as unknown as IFormData;

  const [link, modifier] = defineModel<string>("msg", {
    default: "default value",
    set(value) {
      if (modifier.capitalize) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      } else if (modifier.uppercase) {
        return value.toUpperCase();
      }
      return value;
    },
  });

  const { validatorLocale } = storeToRefs(useI18nStore());
  const validationPatterns = validationConfig[validatorLocale.value][props.validation];
  const inputField = ref<HTMLInputElement | null>(null);

  const hasError = () => {
    return !inputField.value?.validity.valid && modelValue.value.doSubmit;
  };

  watch(
    () => modelValue.value,
    () => {
      modelValue.value!.validityState[props.id] = inputField.value?.validity.valid;
    },
    { deep: true }
  );
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .label {
    transition: all linear 200ms;
    &.error {
      color: $color-red-5;
    }
  }

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
      color: $color-red-5;
      border: 1px solid $color-red-2;
      outline: 1px solid $color-red-5;
    }
  }

  .label {
    display: block;
    // font-size: clamp(1.2rem, 4vw, 1.4rem);
    padding: 6px 0;
  }
</style>
