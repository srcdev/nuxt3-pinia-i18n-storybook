module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    // "../**/*.stories.mdx",
    // "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      return {
	      ...config,
	      define: {
	        ...config.define,
	        global: 'window',
	      },
	    };
    }
    return config;
  },
}