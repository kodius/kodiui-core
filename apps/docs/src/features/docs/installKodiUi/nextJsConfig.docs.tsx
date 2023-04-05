import { BuildElement } from "@/features/docBuilder";

export const nextJsConfig: BuildElement = {
  label: "2. Next JS config",
  description: {
    description: ["next.config.js"],
    codeSnippet: [
      `// https://vanilla-extract.style/documentation/integrations/next/

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);
              `,
      `pnpm install @vanilla-extract/recipes @vanilla-extract/sprinkles`,
      `pnpm install @vanilla-extract/next-plugin`,
    ],
  },
};
