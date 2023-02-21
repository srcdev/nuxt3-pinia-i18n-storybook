import { addDecorator, app } from "@storybook/vue3";
import { createHead } from "@vueuse/head";
import { createI18n } from "vue-i18n";
import translations from "../locales";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "@/assets/styles/index.scss";

const head = createHead({
  script: [
    {
      src: "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
      crossorigin: "anonymous",
    },
    {
      src: "https://kit.fontawesome.com/9d0a19ab04.js",
      crossorigin: "anonymous",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700%7CGreat+Vibes:400%7CRoboto:regular,700%7CDancing+Script:regular,500,600,700",
      media: "all",
    },
  ],
});
app.use(head);

/*
 * i118n set up
 */
const i18n = createI18n({
  langDir: "i18n",
  messages: translations,
  defaultLocale: "en",
  legacy: false,
  locale: "en",
});
app.use(i18n);

/*
 * Pinia store set up
 */
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

addDecorator(() => ({
  template: "<story/>",
  i18n,
}));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
