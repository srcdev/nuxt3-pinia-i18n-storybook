import { config } from "@vue/test-utils";
import { createI18n } from "vue-i18n";

// config.global.plugins.push(
//   createI18n({
//     legacy: false,
//   })
// );

// config.global.mocks.$t = (key: string) => key;
// config.global.mocks.t = (key: string) => key;

const i18n = createI18n({
  legacy: false,
  locale: "en",
  missing: (_, key) => key,
});

config.global.plugins.push(i18n);
