import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devServer: {
    https: true,
    port: 3000,
  },
  ssr: false,
  css: ['modern-normalize', '~/assets/styles/index.scss'],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: 'apiSecret from Nuxt.config',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api-from-Nuxt.config',
    },
  },
  modules: ['@pinia/nuxt', 'nuxt-vitest'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  plugins: ['@/plugins/i18n'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s - Website name',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: './assets/images/favicon.jpg',
        },
        // {
        //   rel: "stylesheet",
        //   href: "./node_modules/modern-normalize/modern-normalize.css",
        // },
      ],
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
});
