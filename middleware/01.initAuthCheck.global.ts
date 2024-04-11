export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuthenticated } = storeToRefs(useAccountStore());
  const { setAuthenticated } = useAccountState();
  const id = ref<null | string>(null);

  try {
    await $fetch("/api/auth/hasAuthCookie", {
      method: "post",
      credentials: "include",
      onResponse({ response }) {
        isAuthenticated.value = response._data.isAuthenticated;
        setAuthenticated(response._data.isAuthenticated);
        if (response._data.isAuthenticated) {
          id.value = response._data.data.id;
        }
      }
    });
  } catch (error) {
    isAuthenticated.value = false;
    setAuthenticated(false);
  }
});
