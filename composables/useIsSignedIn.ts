export const useIsSignedIn = () => {
  const isSignedIn = ref<boolean>(false);
  const { accountState } = useAccountState();
  onMounted(() => {
    isSignedIn.value = accountState.value.isAuthenticated;
  });

  return { isSignedIn };
};
