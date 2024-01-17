import type { IFormData } from "@/types/types.forms";

export function useErrorMessage(name: string, modelValue: IFormData) {
  const defaultError = ref("");
  const customErrorMessages = ref(toRaw(modelValue.customErrorMessages));

  const errorMessage = computed(() => {
    if (customErrorMessages.value[name] !== undefined && customErrorMessages.value[name].useCustomError) {
      return customErrorMessages.value[name].message;
    } else {
      return defaultError.value;
    }
  });

  function setDefaultError(newDefaultError: string) {
    defaultError.value = newDefaultError;
  }

  const fieldHasError = computed(() => {
    return Object.keys(modelValue.validityState).length > 0 && modelValue.doSubmit ? !modelValue.validityState[name] : false;
  });

  return {
    errorMessage,
    setDefaultError,
    fieldHasError,
  };
}
