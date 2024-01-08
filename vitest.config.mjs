// vitest.config.ts
import { fileURLToPath } from "node:url";
import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    globals: true,
    include: ["**/*.nuxt.spec.ts"],
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL("./", import.meta.url)),
      },
    },
    setupFiles: ["./tests/setupFiles/i18n.ts"],
  },
});
