import path from "path";
// import { loadConfigFromFile, mergeConfig } from "vite";
const config = {
  stories: ["../components/**/*.stories.ts"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    // "storybook-addon-nuxt"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  features: {
    storyStoresV7: true,
  },

  // async viteFinal(baseConfig) {
  //   const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, "../vite.config.ts"));

  //   return mergeConfig(baseConfig, userConfig);
  // },

  async viteFinal(config, { configType }) {
    // config.base = "/src/";
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./../"),
      "~": path.resolve(__dirname, "./../"),
    };

    if (configType === "DEVELOPMENT") {
      return {
        ...config,
        define: {
          ...config.define,
          global: "window",
        },
      };
    }
    return config;
  },

  docs: {
    autodocs: true,
  },
};

export default config;
