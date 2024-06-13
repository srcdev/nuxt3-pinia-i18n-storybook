<template>
  <InputTextWithWrapper :id :name :type validation="password" :required="true" v-model:inputTypeModel="inputTypeModel" v-model="modelValue" :i18n-key>
    <template #rightAddOn>
      <InputButtonCore
        @click.prevent="toggleDisplayPassword()"
        type="button"
        data-test-id="password-reveal-btn"
        variant="icon-only"
        size="normal"
        button-text="Display password"
        style-class-passthrough="rightAddOn"
        :button-text-visually-hidden="true"
      >
        <template #left>
          <Icon v-if="displayPassword" name="radix-icons:eye-none" />
          <Icon v-else name="radix-icons:eye-open" />
        </template>
      </InputButtonCore>
    </template>
  </InputTextWithWrapper>
</template>
<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    i18nKey: {
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
    }
  });

  const modelValue = defineModel() as Ref<IFormData>;
  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });
  const displayPassword = ref(false);

  const type = computed(() => {
    return displayPassword.value ? "text" : "password";
  });

  const inputTypeModel = computed(() => {
    return displayPassword.value ? "text" : "password";
  });

  const toggleDisplayPassword = () => {
    displayPassword.value = !displayPassword.value;
  };
</script>

<style scoped>
  .btn.rightAddOn {
    padding: 1px 5px;
    margin-right: 3px;
    border-radius: 0;
  }

  .btn-icon-only {
    background-color: transparent;
    border: 1px solid transparent;
    color: var(--color-grey-8);
    outline: 1px solid transparent;

    &:hover,
    &:focus-visible {
      background-color: transparent;
      border-color: var(--color-grey-8);
      color: var(--color-grey-8);
    }
  }
</style>
