export default defineNuxtRouteMiddleware(async (to, from) => {
  const { accountState } = useAccountState();

  if (accountState.value.isAuthenticated) {
    abortNavigation();
    if (String(to?.name) === "login") {
      return navigateTo("/");
    }
  } else {
    abortNavigation();
    return navigateTo(`/login?returnUrl=${to.fullPath}`);
  }
});
