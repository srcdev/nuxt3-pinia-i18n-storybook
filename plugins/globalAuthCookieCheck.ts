import type { IAccountState, IUserData } from "@/types/types.accountStore";

export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    "globalAuthCookieCheck",
    async () => {
      const { isAuthenticated, userData } = storeToRefs(useAccountStore());
      const data = await $fetch("/api/auth/hasAuthCookie", {
        method: "post",
        credentials: "include"
      });

      // const { accountState, setUserData } = useAccountState();

      if (!data) {
        isAuthenticated.value = false;
        // userData = {
        //   id: "",
        //   username: "",
        //   roles: []
        // };
      } else {
      }
    },
    { global: true }
  );
});
