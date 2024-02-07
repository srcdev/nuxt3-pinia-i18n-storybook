const useAuthState = () => {
  const isAuthenticated = useState<boolean>("authenticated", () => false);

  const setAuthenticated = (state: boolean) => {
    isAuthenticated.value = state;
  };

  return {
    isAuthenticated,
    setAuthenticated,
  };
};
export default useAuthState;
