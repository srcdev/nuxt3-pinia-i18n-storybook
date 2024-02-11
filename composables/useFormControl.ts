import type { IFormData, IFieldsInitialState, ICustomErrorMessage, ICustomErrorMessagesArr } from "@/types/types.forms";

export function useFormControl(formId: string = "") {
  let savedInitialState = {};

  const formData = ref<IFormData>({
    formId: formId,
    data: {},
    validityState: {},
    isPending: false,
    errorCount: 0,
    customErrorMessages: {},
    hasCustomErrorMessages: false,
    formIsValid: false,
    showErrors: false
  });

  async function initFormData(fieldsInitialState: IFieldsInitialState) {
    savedInitialState = fieldsInitialState;
    formData.value.data = fieldsInitialState;
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
   *
   *   Delete entry
   *   updateCustomErrors("username", formData, null);
   */
  function updateCustomErrors(name: string, message: null | string = null, valid: boolean = false) {
    // await nextTick();
    // useSleep(10);
    if (message === null) {
      console.log(`updateCustomErrors("${name}") | IF | null message - remove it | valid(${valid})`);
      console.log(formData.value);

      // formData.value.validityState[name] = valid;
      // await nextTick();
      // delete formData.value.customErrorMessages[name];

      // To properly trigger reactivity, use Vue's set method
      // to delete the property from customErrorMessages

      // const customErrors = unref(formData.value.customErrorMessages);
      // delete customErrors[name];
      // console.log("customErrors");
      // console.log(customErrors);

      // formData.value.customErrorMessages = { ...customErrors };
    } else {
      console.log(`updateCustomErrors("${name}") | ELSE | Has a message - add it`);
      formData.value.validityState[name] = valid;
      formData.value.customErrorMessages[name] = {
        useCustomError: true,
        message
      };
      console.log(formData.value);

      // To properly trigger reactivity, use Vue's set method
      // to add or update the property in customErrorMessages

      // formData.value.customErrorMessages = {
      //   ...formData.value.customErrorMessages,
      //   [name]: {
      //     useCustomError: true,
      //     message,
      //   },
      // };
    }
    formData.value.hasCustomErrorMessages = countItemsWithCustomError(formData.value.customErrorMessages) > 0;
    // getErrorCount();
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
