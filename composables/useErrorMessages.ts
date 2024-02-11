import type { IFormData } from "@/types/types.forms";

export function useErrorMessage(name: string, formData: IFormData) {
  const defaultError = ref("");
  const customErrorMessages = ref(toRaw(formData.customErrorMessages));

  function hasCustomError() {
    return customErrorMessages.value[name] !== undefined && customErrorMessages.value[name].useCustomError;
  }

  const errorMessage = computed(() => {
    console.log(`errorMessage > hasCustomError(${hasCustomError()})`);
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
    if (formData.isPending) {
      if (hasCustomError()) {
        return true;
      } else if (Object.keys(formData.validityState).length > 0 && formData.validityState[name] !== undefined) {
        return !formData.validityState[name];
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
