import type { IFormData, IFieldsInitialState, ICustomErrorMessage } from "@/types/types.forms";

export function useFormControl(formId: string = "", fieldsInitialState: IFieldsInitialState) {
  const formData = ref<IFormData>({
    formId: formId,
    data: fieldsInitialState,
    validityState: {},
    doSubmit: false,
    errorCount: 0,
    customErrorMessages: {},
    formIsValid: false,
  });

  async function getErrorCount() {
    await nextTick();

    const errorCount = Object.values(formData.value.validityState).filter((value) => !value).length;
    formData.value.errorCount = errorCount;
    formData.value.formIsValid = errorCount === 0;
    return formData.value.errorCount;
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
  function updateCustomErrors(name: string, formData: IFormData, errorObj: null | ICustomErrorMessage = null) {
    if (errorObj === null) {
      delete formData.value.customErrorMessages[name];
    } else {
      formData.value.customErrorMessages[name] = errorObj;
    }
  }

  const resetForm = () => {
    formData.value.data = fieldsInitialState;
    formData.value.validityState = {};
    formData.value.errorCount = 0;
    formData.value.doSubmit = false;
    formData.value.customErrorMessages = {};
    formData.value.formIsValid = false;
  };

  const formIsValid = computed(() => {
    return formData.value.errorCount === 0 && formData.value.doSubmit;
  });

  // Keep an eye on this for performance issue
  watch(
    () => formData.value.validityState,
    () => {
      console.log("watch() formData.value.validityState triggered");
      getErrorCount();
    },
    { deep: true }
  );

  return { formData, getErrorCount, updateCustomErrors, resetForm, formIsValid };
}
