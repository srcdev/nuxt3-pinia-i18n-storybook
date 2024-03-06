import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt/config";
import favicons from "./config/favIcons.json";

export default defineNuxtConfig({
  debug: process.env.NODE_ENV === "development",
  devServer: {
    https: true,
    port: 3000
  },
  css: ["modern-normalize", "~/assets/styles/index.scss"],
  runtimeConfig: {
    public: {
      sitename: "On The Plains",
      siteEnvironment: "Dev",
      apiBaseURL: "https://localhost:3000",
      openWeatherApiKey: "e1db6f89d39fdc60083cacec2009d62f"
    }
  },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@pinia-plugin-persistedstate/nuxt", "nuxt-icon", "@nuxt/test-utils", "@nuxt/image"],
  i18n: {
    vueI18n: "./i18n.config"
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      titleTemplate: "%s - Website name",
      link: [...favicons],
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }]
    },
    pageTransition: {
      name: "page",
      mode: "out-in"
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in"
    }
  },
  vite: {
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./", import.meta.url))
      }
    }
  }
});
