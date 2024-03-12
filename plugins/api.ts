// NEW object notation
export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: useRuntimeConfig().public.apiBaseURL,
      headers: {
        "X-Some-Custom": "1"
      }
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
//     baseURL: useRuntimeConfig().public.apiBaseURL
//   });

//   return {
//     provide: {
//       api
//     }
//   };
// });
