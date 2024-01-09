import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt/config";
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { GlobalSettings } from "./environmentsettings";
// const appEnv = process.env.NODE_ENV;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // typescript: {
  //   shim: true,
  // },
  devServer: {
    https: true,
    port: 3000,
  },
  // proxy: {
  //   "/api/": { target: "http://localhost:234123" },
  // },
  // ssr: false,
  css: ["modern-normalize", "~/assets/styles/index.scss"],
  runtimeConfig: {
    public: {
      sitename: "Website name",
      siteEnvironment: "Dev",
      apiBaseURL: "https://localhost:3000",
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@pinia-plugin-persistedstate/nuxt", "nuxt-icon", "@nuxt/test-utils"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  // plugins: ["@/plugins/i18n"],
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
          href: "./assets/images/favicon.jpg",
        },
        // {
        //   rel: "stylesheet",
        //   href: "./node_modules/modern-normalize/modern-normalize.css",
        // },
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
  vite: {
    // vue: {
    //   script: {
    //     defineModel: true,
    //   },
    // },
    // plugins: [
    //   AutoImport({
    //     imports: ["vue", "vue-router"],
    //     dirs: ["./composables", "./stores"],
    //     vueTemplate: true,
    //   }),
    //   Components({
    //     dirs: ["./composables", "./components"],
    //     dts: true,
    //     directoryAsNamespace: false,
    //   }),
    // ],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
    // server: {
    //   proxy: {
    //     "/api/": {
    //       target: GlobalSettings[appEnv].apiBaseURL,
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/api\/resources/, '')
    //     },
    //   },
    // },
  },
});
