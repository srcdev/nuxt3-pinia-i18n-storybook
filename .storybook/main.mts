import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  // stories: ["../store-sample-actions/**/*.stories.ts", "../storybook-stories/**/*.stories.ts", "../components/**/*.stories.ts"],
  stories: ["../components/**/*.stories.ts"],
  // addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", "@storybook/addon-docs", "storybook-addon-nuxt", "storybook-addon-i18n"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "storybook-addon-nuxt"
    // "storybook-addon-nuxt"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  features: {
    storyStoreV7: true
  },

  // async viteFinal(config: any, { configType }) {
  //   return mergeConfig(config, {
  //     resolve: {
  //       alias: {
  //         "@": path.resolve(__dirname, "./../"),
  //         "~": path.resolve(__dirname, "./../")
  //       }
  //     }
  //   });
  // },
  docs: {
    autodocs: true
  }
};
export default config;
