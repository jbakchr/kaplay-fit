import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  root: "examples/dev", // 👈 This enables vite dev
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "kaplayFit",
      fileName: "kaplayFit",
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
