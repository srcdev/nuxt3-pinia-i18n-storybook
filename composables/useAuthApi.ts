import type { IFormData, IFieldsInitialState, ICustomErrorMessage, ICustomErrorMessagesArr } from "@/types/types.forms";
import type { ILoginPayload, ILoginResponse } from "@/types/types.auth";
import type { IAccountState, IUserData } from "@/types/types.accountStore";

export function useAuthApi() {
  const { isAuthenticated } = storeToRefs(useAccountStore());
  const { accountState, setAuthenticated } = useAccountState();

  async function doLogin(body: ILoginPayload) {
    const response = await $fetch<ILoginResponse>("/api/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        username: body.username,
        password: body.password,
        rememberMe: body.rememberMe
      },
      onResponseError({ request, response, options }) {
        throw response;
      }
    });
    return response;
  }

  async function doLogout() {
    await $fetch<ILoginResponse>("/api/auth/logout", {
      onResponseError({ response }) {
        throw response;
      }
    });

    isAuthenticated.value = false;
    setAuthenticated(false);
    navigateTo("/");
    return;
  }

  return {
    doLogin,
    doLogout
  };
}
