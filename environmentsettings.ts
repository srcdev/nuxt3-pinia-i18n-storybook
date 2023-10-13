const GlobalSettings = {
  development: {
    siteEnvironment: "Dev",
    apiBaseURL: "https://localhost:3000",
  },
  staging: {
    siteEnvironment: "Test",
    apiBaseURL: "https://localhost:3000",
  },
  production: {
    siteEnvironment: "",
    apiBaseURL: "",
  },
};

export { GlobalSettings };
