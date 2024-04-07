const PublicRuntimeConfig = {
  development: {
    sitename: "[DEV] | On The Plains",
    siteEnvironment: "Dev",
    apiBaseURL: "https://localhost:3000",
    openWeatherApiKey: "e1db6f89d39fdc60083cacec2009d62f",
    cloudinaryCloudName: "dbez3kgxo",
    cloudinaryApiKey: "195122722414347",
    cookieRememberMeExpires: 1000 * 60 * 60 * 24 * 7,
    cookieExpires: 1000 * 60 * 60,
    cookieName: "AUTH"
  },
  production: {
    sitename: "On The Plains",
    siteEnvironment: "Production",
    apiBaseURL: "/",
    openWeatherApiKey: "e1db6f89d39fdc60083cacec2009d62f",
    cloudinaryCloudName: "dbez3kgxo",
    cloudinaryApiKey: "195122722414347",
    cookieRememberMeExpires: 1000 * 60 * 60 * 24 * 7,
    cookieExpires: 1000 * 60 * 60,
    cookieName: "AUTH"
  }
};

export { PublicRuntimeConfig };
