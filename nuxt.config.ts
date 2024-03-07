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
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@pinia-plugin-persistedstate/nuxt", "nuxt-icon", "@nuxt/test-utils", "@nuxt/image", "nuxt-security"],
  i18n: {
    vueI18n: "./i18n.config"
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  security: {
    nonce: true, // Enables HTML nonce support in SSR mode
    ssg: {
      meta: true, // Enables CSP as a meta tag in SSG mode
      hashScripts: true, // Enables CSP hash support for scripts in SSG mode
      hashStyles: false // Disables CSP hash support for styles in SSG mode (recommended)
    },
    headers: {
      contentSecurityPolicy: {
        "script-src": [
          "'self'", // Fallback value, will be ignored by most modern browsers (level 3)
          "https:", // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'" // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ],
        "style-src": [
          "'self'", // Enables loading of stylesheets hosted on same origin
          "https:", // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'" // Recommended default for most Nuxt apps
        ],
        "img-src": ["'self'", "data:"], // Add relevant https://... sources if you load images from external sources
        "font-src": ["'self'", "https:", "data:"], //  For increased security, replace by the specific sources for fonts
        "base-uri": ["'none'"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "upgrade-insecure-requests": true
      }
    },
    sri: true
  },
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
