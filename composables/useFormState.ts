import type { IFormData, IFieldsInitialState, ICustomErrorMessage, ICustomErrorMessagesArr } from "@/types/types.forms";

const useFormState = (id: string) => {
  const formData = useState<IFormData>("formData" + id, () => <IFormData>{});

  // const setAuthenticated = (state: boolean) => {
  //   isAuthenticated.value = state;
  // };

  return {
    formData
    // setAuthenticated
  };
};
export default useFormState;
