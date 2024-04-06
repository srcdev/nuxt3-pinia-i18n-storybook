import { action } from "@storybook/addon-actions";
import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createI18n } from "vue-i18n";
import translations from "../locales";

import "@/assets/styles/index.scss";

const customViewports = {
  desktop: {
    name: "Desktop - 1280px",
    styles: {
      width: "1280px",
      height: "1200px"
    }
  },
  iPad10inch: {
    name: 'Apple iPad 10.2" - 810px 2x',
    styles: {
      width: "810px",
      height: "1080px"
    }
  },
  iPadAir: {
    name: "Apple iPad Air - 834px 2x",
    styles: {
      width: "834px",
      height: "1112px"
    }
  },
  iPadAir2020: {
    name: "Apple iPad Air 2020 - 820px 2x",
    styles: {
      width: "820px",
      height: "1180px"
    }
  },
  iPadMini: {
    name: "Apple iPad Mini - 768px 2x",
    styles: {
      width: "768px",
      height: "1024px"
    }
  },
  iPhone13: {
    name: "Apple iPhone 13 - 390px 3x",
    styles: {
      width: "390px",
      height: "844px"
    }
  },
  iPhone13Mini: {
    name: "Apple iPhone 13 Mini - 360px 3x",
    styles: {
      width: "360px",
      height: "780px"
    }
  },
  iPhone13Pro: {
    name: "Apple iPhone 13 Pro - 390px 3x",
    styles: {
      width: "390px",
      height: "844px"
    }
  },
  iPhone13ProMax: {
    name: "Apple iPhone 13 Pro Max - 428px 3x",
    styles: {
      width: "428px",
      height: "926px"
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "Default",
    values: [
      {
        name: "Default",
        value: "#EEEEEE"
      },
      {
        name: "Dark",
        value: "#3c3c3c"
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: "desktop"
  }
};

/*
 * Pinia store set up
 */
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

/*
 * i118n set up
 */
const i18n = createI18n({
  langDir: "locales",
  messages: translations,
  legacy: false,
  locale: "en"
});

setup((app) => {
  app.use(pinia);
  app.use(i18n);
  app.component("NuxtLink", {
    props: ["to"],
    methods: {
      log() {
        action("link target")(this.to);
      }
    },
    template: '<a @click="log()" style="cursor:pointer;"><slot>NuxtLink</slot></a>'
  });
});
