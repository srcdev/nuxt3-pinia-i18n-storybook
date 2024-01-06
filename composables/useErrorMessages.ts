import type { IFormData, ICustomErrorMessagesArr } from "@/types/types.forms";

export function useErrorMessage(id: string, modelValue: IFormData) {
  const defaultError = ref("");
  const customErrorMessages = ref(toRaw(modelValue.customErrorMessages));

  const errorMessage = computed(() => {
    if (customErrorMessages.value[id] !== undefined && customErrorMessages.value[id].useCustomError) {
      return customErrorMessages.value[id].message;
    } else {
      return defaultError.value;
    }
  });

  function setDefaultError(newDefaultError: string) {
    defaultError.value = newDefaultError;
  }

  const fieldHasError = computed(() => {
    return Object.keys(modelValue.validityState).length > 0 && modelValue.doSubmit ? !modelValue.validityState[id] : false;
    // return true;
  });

  return {
    errorMessage,
    setDefaultError,
    fieldHasError,
  };
}
