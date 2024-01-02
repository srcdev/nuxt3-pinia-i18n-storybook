import type { IFormData, IFieldsInitialState } from "@/types/types.forms";

export function useFormControl(formId: string, fieldsInitialState: IFieldsInitialState) {
  const formData = ref<IFormData>({
    formId: formId,
    data: fieldsInitialState,
    validityState: {},
    doSubmit: false,
    errorCount: 0,
  });

  const getErrorCount = () => {
    let errors = 0;
    const validityState = formData.value.validityState;
    for (const key in validityState) {
      if (validityState.hasOwnProperty(key) && !validityState[key]) {
        errors++;
      }
    }

    return errors;
  };

  const watchFormUpdates = () => {
    watch(
      () => formData.value,
      () => {
        formData.value.errorCount = getErrorCount();
      },
      { deep: true }
    );
  };

  watchFormUpdates();

  return { formData };
}
