export default defineEventHandler((event) => {
  const cookies = parseCookies(event);

  const response = {
    isAuthenticated: cookies["AUTH"] !== undefined,
    data: {
      id: cookies["AUTH"]
    }
  };
  return response;

  // return cookies["AUTH"] !== undefined;
});
