// vitest.config.ts
import { fileURLToPath } from "node:url";
import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    // dir: "tests",
    // coverage: {
    //   reportsDirectory: "coverage",
    // },
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL("./", import.meta.url)),
        overrides: {
          // other nuxt config you want to pass
        },
      },
    },
  },
});
