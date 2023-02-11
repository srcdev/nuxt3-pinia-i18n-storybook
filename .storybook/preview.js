import { addDecorator, app } from "@storybook/vue3";
import { createI18n } from "vue-i18n"
import translations from "../locales"

const i18n = createI18n({
  langDir: 'i18n',
  messages: translations,
  defaultLocale: 'en',
  legacy: false,
  locale: 'en',
})
app.use(i18n)

addDecorator(() => ({
  template: '<story/>',
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
}