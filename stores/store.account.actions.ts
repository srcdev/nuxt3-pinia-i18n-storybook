import { IAccountState } from "@/types/types.accountStore";

export const accountActions = {
  async updateLoginState(this: IAccountState, payload: boolean) {
    if (this.signedIn) {
      this.signOut(payload);
    } else {
      this.signIn(payload);
    }
  },
  async signIn(this: IAccountState, payload: boolean) {
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
  async signOut(this: IAccountState, payload: boolean) {
    await useFetch("/api/sign-out").then((response) => {
      this.signedIn = false;
      this.currentUser.name = "";

      const cookieSignedIn = useCookie(".AUTH", {
        sameSite: true,
      });
      cookieSignedIn.value = null;
    });
  },
};
