import type { IFormData, IFieldsInitialState, ICustomErrorMessage, ICustomErrorMessagesArr } from "@/types/types.forms";

export function useFormControl() {
  let savedInitialState = {};

  const formData = ref<IFormData>({
    data: {} as IFieldsInitialState,
    validityState: {},
    isPending: false,
    errorCount: 0,
    customErrorMessages: {},
    hasCustomErrorMessages: false,
    formIsValid: false,
    showErrors: false,
    submitSuccess: false
  });

  async function initValidationState(fieldsInitialState: IFieldsInitialState | Ref<IFieldsInitialState | null>) {
    const fields = Object.keys(fieldsInitialState.value || {});
    const state = fields.reduce((acc, field) => {
      acc[field] = false;
      return acc;
    }, {} as Record<string, boolean>);
    formData.value.validityState = state;
  }

  async function initFormData(fieldsInitialState: IFieldsInitialState | Ref<IFieldsInitialState | null>) {
    await initValidationState(fieldsInitialState);

    if (fieldsInitialState !== null) {
      savedInitialState = fieldsInitialState;
      formData.value.data = fieldsInitialState as IFieldsInitialState;
    }
    return;
  }

  async function getErrorCount() {
    await nextTick();

    const errorCount = Object.values(formData.value.validityState).filter((value) => !value).length;
    formData.value.errorCount = errorCount;
    formData.value.formIsValid = errorCount === 0;
    return formData.value.errorCount;
  }

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
   */
  function updateCustomErrors(name: string, message: null | string = null, valid: boolean = false) {
    if (message !== null) {
      formData.value.validityState[name] = valid;
      formData.value.customErrorMessages[name] = {
        useCustomError: true,
        message
      };
    }
    formData.value.hasCustomErrorMessages = countItemsWithCustomError(formData.value.customErrorMessages) > 0;
  }

  function resetForm() {
    formData.value.data = savedInitialState;
    formData.value.validityState = {};
    formData.value.errorCount = 0;
    formData.value.isPending = false;
    formData.value.customErrorMessages = {};
    formData.value.formIsValid = false;
  }

  const showErrors = computed(() => {
    return formData.value.errorCount > 0 && formData.value.isPending;
  });

  const formIsValid = computed(() => {
    return formData.value.errorCount === 0;
  });

  // Keep an eye on this for performance issue
  watch(
    () => formData.value.validityState,
    () => {
      getErrorCount();
    },
    { deep: true }
  );

  return { formData, initFormData, getErrorCount, updateCustomErrors, resetForm, showErrors, formIsValid };
}
