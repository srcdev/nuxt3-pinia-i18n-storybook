// vitest.config.ts
import { fileURLToPath } from "node:url";
import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL("./", import.meta.url)),
      },
    },
  },
});
