// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/styles/index.scss"],
  modules: [
    "@pinia/nuxt",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "en",
            file: "en-GB.json",
            name: "English",
          },
        ],
        lazy: true,
        langDir: "locales",
        defaultLocale: "en",
        globalInjection: true,
        legacy: false,
        // useScope: "global",
      },
    ],
  ],
  // imports: {
  //   dirs: ["stores"],
  // },
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
