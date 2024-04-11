import type { IAccountState, IUserData } from "@/types/types.accountStore";

const useAccountState = () => {
  const accountState = useState<IAccountState>("accountState", () =>
    ref({
      isAuthenticated: false
    })
  );

  const setAuthenticated = (state: boolean) => {
    accountState.value.isAuthenticated = state;
  };

  const setUserData = (userData: IUserData) => {
    accountState.value.isAuthenticated = true;
    accountState.value.userData = userData;
    console.log("accountState.value.userData", accountState.value);
  };

  return {
    accountState,
    setAuthenticated,
    setUserData
  };
};
export default useAccountState;
