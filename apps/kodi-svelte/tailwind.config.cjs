const { fontFamily } = require("tailwindcss/defaultTheme")
const { spacing, screenStyles, customColors } = require("./src/styles/tokens")

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				...customColors,
			},
			fontFamily: {
				sans: ["Nunito", ...fontFamily.sans],
				title: ["Inter", ...fontFamily.sans],
			},
			spacing: spacing,
			screens: screenStyles,
		},
	},

	plugins: [require("tailwindcss-animate")],
}

module.exports = config
