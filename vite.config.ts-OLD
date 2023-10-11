import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vue", "vue-router"],
      dirs: ["./composables", "./stores"],
      vueTemplate: true,
    }),
    Components({
      dirs: ["./composables", "./components"],
      dts: true,
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
