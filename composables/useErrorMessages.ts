import type { IFormData, ICustomErrorMessagesArr } from "@/types/types.forms";

export function useErrorMessage(id: string, modelValue: IFormData) {
  const defaultError = ref("");
  const customErrorMessages = ref(toRaw(modelValue.customErrorMessages));

  const errorMessage = computed(() => {
    if (customErrorMessages.value[id] !== undefined && customErrorMessages.value[id].useCustomError) {
      console.log(customErrorMessages.value[id]);
      return customErrorMessages.value[id].message;
    } else {
      return defaultError;
    }
  });

  function setDefaultError(newDefaultError: string) {
    defaultError.value = newDefaultError;
  }

  return {
    errorMessage,
    setDefaultError,
  };
}
