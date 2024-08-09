export default defineEventHandler((event) => {
  return false;

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
