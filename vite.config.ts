import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    // `vite dev`
    return {
      root: "examples/dev",
    };
  } else {
    // `vite build`
    return {
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "kaplayFit",
          fileName: "kaplayFit",
        },
        outDir: "dist", // 👈 output to project root
      },
      plugins: [dts({ rollupTypes: true })],
    };
  }
});
