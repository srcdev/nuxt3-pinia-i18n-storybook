import { IAccountState } from "@/types/types.accountStore";

export const accountActions = {
  async signIn(this: IAccountState) {
    await useFetch("/api/sign-in").then((response) => {
      const cookieSignedIn = useCookie(".AUTH", {
        sameSite: true,
      });
      if (response.data.value) {
        this.signedIn = response.data.value;
        this.currentUser.name = "Test";
        cookieSignedIn.value = "true";
      }
    });
  },
  async signOut(this: IAccountState) {
    await useFetch("/api/sign-out").then(() => {
      this.signedIn = false;
      this.currentUser.name = "";

      const cookieSignedIn = useCookie(".AUTH", {
        sameSite: true,
      });
      cookieSignedIn.value = null;
    });
  },
  // async updateLoginState(this: IAccountState, payload: boolean) {
  //   if (this.signedIn) {
  //     this.signOut(payload);
  //   } else {
  //     this.signIn(payload);
  //   }
  // },
};
