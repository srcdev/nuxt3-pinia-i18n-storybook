import type { IFormData, IFieldsInitialState, ICustomErrorMessage, ICustomErrorMessagesArr } from "@/types/types.forms";
import type { ILoginPayload, ILoginResponse } from "@/types/types.auth";

export function useAuthApi() {
  async function doAuthUseFetch(body: ILoginPayload) {
    const {
      data: userData,
      pending,
      status,
      execute,
      error,
      refresh,
    } = await useFetch<ILoginResponse>("https://dummyjson.com/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        username: body.username,
        password: body.password,
      },
    });

    return {
      data: userData,
      pending,
      status,
      execute,
      error,
      refresh,
    };
  }

  async function doAuthDollarFetch(body: ILoginPayload) {
    const response = await $fetch<ILoginResponse>("https://dummyjson.com/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        username: body.username,
        password: body.password,
      },
      // onResponseError({ request, response, options }) {
      //   console.log("[fetch response error]", request, response, response.status, response.body, options);
      // },
    });
    return response;
  }

  return {
    doAuthUseFetch,
    doAuthDollarFetch,
  };
}
