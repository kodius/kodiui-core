import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { resolve } from "pathe";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui",
      // the proper extensions will be added
      fileName: "ui",
      formats: ["es", "cjs", "umd", "iife"],
    },
  },
});
