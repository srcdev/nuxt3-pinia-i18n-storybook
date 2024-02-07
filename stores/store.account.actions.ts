import type { IAccountState } from "@/types/types.accountStore";

export const accountActions = {
  async signIn(this: IAccountState) {
    await useFetch("/api/sign-in").then((response) => {
      const cookieSignedIn = useCookie(".AUTH", {
        sameSite: true,
      });
      if (response.data.value) {
        this.authenticated = response.data.value;
        this.currentUser.name = "Test";
        cookieSignedIn.value = "true";
      }
    });
  },
  async signOut(this: IAccountState) {
    // await useFetch("/api/sign-out").then(() => {
    this.authenticated = false;
    this.currentUser.name = "";

    const cookieSignedIn = useCookie(".AUTH", {
      sameSite: true,
    });
    cookieSignedIn.value = null;
    navigateTo("/");
    // });
  },
  async setAuthenticationState(this: IAccountState, payload: boolean) {
    this.authenticated = payload;
  },
};
