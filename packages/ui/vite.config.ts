import { defineConfig } from "vite";
import { resolve } from "pathe";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui",
      fileName: "ui",
      formats: ["es", "cjs", "umd"],
      // formats: ["cjs"],
    },
  },
});
