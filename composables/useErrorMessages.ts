import type { IFormData } from "@/types/types.forms";

export function useErrorMessage(name: string, formData: IFormData) {
  const defaultError = ref("");
  const customErrorMessages = ref(toRaw(formData.value.customErrorMessages));

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
    if (formData.value.isPending) {
      if (hasCustomError()) {
        return true;
      } else if (Object.keys(formData.value.validityState).length > 0 && formData.value.validityState[name] !== undefined) {
        return !formData.value.validityState[name];
      }
      return false;
    }
  });

  function removeCustomError(valid: boolean = false) {
    formData.value.validityState[name] = valid;
    // await nextTick();
    delete formData.value.customErrorMessages[name];
  }

  return {
    hasCustomError,
    errorMessage,
    setDefaultError,
    fieldHasError,
    removeCustomError
  };
}
