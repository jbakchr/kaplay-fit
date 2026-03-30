import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    // For "vite dev" example playground
    return {
      root: "examples/dev",
    };
  }

  // For "vite build"
  return {
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "kaplayFit",
        formats: ["es", "cjs"],
        fileName: (format) =>
          format === "es" ? "kaplay-fit.js" : "kaplay-fit.cjs",
      },
      outDir: "dist",
      rollupOptions: {
        // Prevent bundling kaplay into your library
        external: ["kaplay"],
      },
    },

    plugins: [
      dts({
        outDir: "dist",
        insertTypesEntry: true, // will create dist/index.d.ts + entry
      }),
    ],
  };
});
