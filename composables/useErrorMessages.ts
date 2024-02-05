import type { IFormData } from "@/types/types.forms";

export function useErrorMessage(name: string, modelValue: IFormData) {
  const defaultError = ref("");
  const customErrorMessages = ref(toRaw(modelValue.customErrorMessages));

  function hasCustomError() {
    return customErrorMessages.value[name] !== undefined && customErrorMessages.value[name].useCustomError;
  }

  const errorMessage = computed(() => {
    if (hasCustomError()) {
      return customErrorMessages.value[name].message;
    } else {
      return defaultError.value;
    }
  });

  function setDefaultError(newDefaultError: string) {
    defaultError.value = newDefaultError;
  }

  const fieldHasError = computed(() => {
    if (modelValue.isPending) {
      return hasCustomError() ? hasCustomError() : Object.keys(modelValue.validityState).length > 0 && modelValue.isPending ? !modelValue.validityState[name] : false;
    }
  });

  return {
    hasCustomError,
    errorMessage,
    setDefaultError,
    fieldHasError,
  };
}
