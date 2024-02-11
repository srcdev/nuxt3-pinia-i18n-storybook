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
      if (hasCustomError()) {
        return true;
      } else if (Object.keys(modelValue.validityState).length > 0 && modelValue.validityState[name] !== undefined) {
        return !modelValue.validityState[name];
      }
      return false;
    }
  });

  return {
    hasCustomError,
    errorMessage,
    setDefaultError,
    fieldHasError
  };
}
