import type { IFormData, IFieldsInitialState, ICustomErrorMessage, ICustomErrorMessagesArr } from "@/types/types.forms";
import type { ILoginPayload, ILoginResponse } from "@/types/types.auth";

export function useAuthApi() {
  const { authenticated } = storeToRefs(useAccountStore());

  async function doAuthUseFetch(body: ILoginPayload) {
    const {
      data: userData,
      pending,
      status,
      error
    } = await useFetch<ILoginResponse>("https://dummyjson.com/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        username: body.username,
        password: body.password
      }
    });

    return {
      data: userData,
      pending,
      status,
      error
    };
  }

  async function doAuthDollarFetch(body: ILoginPayload) {
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

  function doLogout() {
    authenticated.value = false;
    navigateTo("/");
  }

  return {
    doAuthUseFetch,
    doAuthDollarFetch,
    doLogout
  };
}
