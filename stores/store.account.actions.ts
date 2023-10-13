import { IAccountState } from "@/types/types.accountStore";

export const accountActions = {
  async updateLoginState(this: IAccountState, payload: boolean) {
    await useFetch("/api/sign-in").then((response) => {
      this.signedIn = response.data.value;
      this.currentUser.name = "Test";

      const cookieSignedIn = useCookie(".AUTH", {
        sameSite: true,
      });
      if (response.data) {
        cookieSignedIn.value = true;
      }
    });
  },
};
