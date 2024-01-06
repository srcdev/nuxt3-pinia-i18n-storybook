import type { IFormData, IFieldsInitialState, ICustomErrorMessage } from "@/types/types.forms";

export function useFormControl(formId: string = "", fieldsInitialState: IFieldsInitialState = {}) {
  const formData = ref<IFormData>({
    formId: formId,
    data: fieldsInitialState,
    validityState: {},
    doSubmit: false,
    errorCount: 0,
    customErrorMessages: {},
  });

  function getErrorCount() {
    let errors = 0;
    const validityState = formData.value.validityState;
    for (const key in validityState) {
      if (validityState.hasOwnProperty(key) && !validityState[key] && formData.value.doSubmit) {
        errors++;
      }
    }

    return errors;
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
   *   updateCustomErrors("email", modelValue, sampleCustomErrorEmail);
   *
   *   Delete entry
   *   updateCustomErrors("username", formData, null);
   */
  function updateCustomErrors(id: string, formData: IFormData, errorObj: null | ICustomErrorMessage = null) {
    if (errorObj === null) {
      delete formData.value.customErrorMessages[id];
    } else {
      formData.value.customErrorMessages[id] = errorObj;
    }
  }

  const resetForm = (fieldsInitialState: IFieldsInitialState = {}) => {
    console.log("composable resetForm");
    formData.value.data = fieldsInitialState;
    formData.value.validityState = {};
    formData.value.errorCount = 0;
    formData.value.doSubmit = false;
  };

  function watchFormUpdates() {
    watch(
      () => formData.value,
      () => {
        formData.value.errorCount = getErrorCount();
      },
      { deep: true }
    );
  }

  watchFormUpdates();

  return { formData, updateCustomErrors, resetForm };
}
