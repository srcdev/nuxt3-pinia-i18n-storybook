// NEW object notation
export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: useRuntimeConfig().public.apiBaseURL ?? "https://localhost:3000"
      // use interceptors
      // onRequest: (() => {

      // }),
      // onResponseError: (() => {

      // }),
      // onResponse: (() => {

      // }),
      // onRequestError: (() => {

      // })
    });

    return {
      provide: {
        api
      }
    };
  }
});

// function notation
// export default defineNuxtPlugin(() => {
//   const api = $fetch.create({
//     baseURL: useRuntimeConfig().public.apiBaseURL ?? "https://localhost:3000"
//   });

//   return {
//     provide: {
//       api
//     }
//   };
// });
