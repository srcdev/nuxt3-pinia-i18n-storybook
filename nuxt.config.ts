import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/styles/index.scss"],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "apiSecret from Nuxt.config",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "/api-from-Nuxt.config",
    },
  },
  modules: [
    "@pinia/nuxt",
    // [
    //   "@nuxtjs/i18n",
    //   {
    //     locales: [
    //       {
    //         code: "en",
    //         file: "en-GB.json",
    //         name: "English",
    //       },
    //     ],
    //     lazy: true,
    //     langDir: "locales",
    //     defaultLocale: "en",
    //     globalInjection: true,
    //     legacy: false,
    //     // useScope: "global",
    //   },
    // ],
  ],
  // imports: {
  //   dirs: ["stores"],
  // },
  plugins: ["@/plugins/i18n"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s - Website name",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/assets/images/favicon.jpg",
        },
      ],
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
});
