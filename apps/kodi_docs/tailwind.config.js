const { spacing } = require("./src/tailwind/vars");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/tailwind/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: spacing,
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
  },
};
