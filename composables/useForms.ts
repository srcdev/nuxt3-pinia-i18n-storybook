import type { IFormData, IFieldsInitialState, ICustomErrorMessage, ICustomErrorMessagesArr } from "@/types/types.forms";

export function useForms(formId: string = "") {
  const formData = ref<IFormData>({
    formId: formId,
    data: {},
    validityState: {},
    isPending: false,
    errorCount: 0,
    customErrorMessages: {},
    hasCustomErrorMessages: false,
    formIsValid: false,
    showErrors: false,
  });

  const defaultError = ref("");
  const customErrorMessages = ref(toRaw(formData.value.customErrorMessages));

  // Function to count items with "useCustomError" set to true
  function countItemsWithCustomError(obj: ICustomErrorMessagesArr) {
    let count = 0;

    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key].useCustomError === true) {
        count++;
      }
    }

    return count;
  }

  const initFormData = async (fieldsInitialState: IFieldsInitialState) => {
    console.log(`initFormData()`);
    formData.value.data = fieldsInitialState;
    return;
  };

  const getErrorCount = async () => {
    await nextTick();

    const errorCount = Object.values(formData.value.validityState).filter((value) => !value).length;
    formData.value.errorCount = errorCount;
    formData.value.formIsValid = errorCount === 0;
    formData.value.showErrors = errorCount > 0 && formData.value.isPending;
    return formData.value.errorCount;
  };

  /*
   *   Useage:
   *
   *   const { updateCustomErrors } = useFormControl();
   *
   *   Add/Update entry
   *   const sampleCustomErrorEmail = {
   *     useCustomError: true,
   *     message: "This is a sample custom error for error EMAIL",
   *   };
   *   updateCustomErrors("email", sampleCustomErrorEmail);
   *
   *   Delete entry
   *   updateCustomErrors("username", formData, null);
   */
  async function updateCustomErrors(name: string, message: null | string = null) {
    await nextTick();
    // useSleep(10);
    if (message === null) {
      formData.value.validityState[name] = true;
      delete formData.value.customErrorMessages[name];
    } else {
      formData.value.validityState[name] = false;
      formData.value.customErrorMessages[name] = {
        useCustomError: true,
        message,
      };
    }
    formData.value.hasCustomErrorMessages = countItemsWithCustomError(formData.value.customErrorMessages) > 0;
    // getErrorCount();
  }

  const showErrors = computed(() => {
    return formData.value.errorCount > 0 && formData.value.isPending;
  });

  const formIsValid = computed(async () => {
    await nextTick();
    console.log("formIsValid: errorCount: ", formData.value.errorCount);
    return formData.value.errorCount === 0;
  });

  // Handle errors

  const errorMessage = (name: string) => {
    if (customErrorMessages.value[name] !== undefined && customErrorMessages.value[name].useCustomError) {
      return customErrorMessages.value[name].message;
    } else {
      return defaultError.value;
    }
  };

  function setDefaultError(newDefaultError: string) {
    defaultError.value = newDefaultError;
  }

  const hasCustomError = (name: string) => {
    const hasError = typeof formData.value.customErrorMessages[name] !== "undefined" && formData.value.customErrorMessages[name].useCustomError;
    console.log("hasCustomError: ", hasError);
    return hasError;
  };

  // const fieldHasError = computed(() => {
  //   console.log(`fieldHasError(${name})`);
  //   // let hasError = false;
  //   const hasInternalValidationError = Object.keys(formData.value.validityState).length > 0 && formData.value.isPending ? !formData.value.validityState[name] : false;
  //   // return hasCustomError(name) ? hasInternalValidationError : false;
  //   return hasInternalValidationError;
  // });

  return { formData, initFormData, getErrorCount, updateCustomErrors, showErrors, formIsValid, errorMessage, setDefaultError, hasCustomError };
}
