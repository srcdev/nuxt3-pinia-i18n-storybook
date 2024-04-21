export default defineEventHandler((event) => {
  const cookies = parseCookies(event);
  const isAuthenticated = cookies["AUTH"] !== undefined;
  const response = {
    isAuthenticated,
    data: {
      id: cookies["AUTH"]
    }
  };

  return response;

  // if (isAuthenticated) {
  //   return {
  //     statusCode: 200,
  //     statusMessage: "success",
  //     stack: "",
  //     message: "Authorized",
  //     data: response
  //   };
  // } else {
  //   return createError({
  //     statusCode: 401,
  //     statusMessage: "error",
  //     stack: "",
  //     message: "Unauthorized",
  //     data: null
  //   });
  // }
});
