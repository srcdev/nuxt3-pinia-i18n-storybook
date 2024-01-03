export function useErrorMessage() {
  const defaultError = ref("");
  const customError = ref("");
  const useCustomErrorMessage = ref(false);

  const errorMessage = computed(() => {
    return useCustomErrorMessage.value ? customError.value : defaultError.value;
  });

  function setDefaultError(newDefaultError: string) {
    defaultError.value = newDefaultError;
  }

  function setCustomError(newCustomError: string) {
    customError.value = newCustomError;
  }

  function setUseCustomErrorMessage(value: boolean) {
    useCustomErrorMessage.value = value;
  }

  return {
    errorMessage,
    setDefaultError,
    setCustomError,
    setUseCustomErrorMessage,
  };
}
