const path = require("path");

module.exports = {
  stories: [
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../layouts/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../store-sample-actions/**/*.stories.@(js|jsx|ts|tsx)",
    // TODO: Generic stories location
    // "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/vue3",
  features: {
    storyStoresV7: true,
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // Resolve @ alias to root folder.
    // config.base = "/";
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   "@": path.resolve(__dirname, "./"),
    // };

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
};
