const { fontFamily } = require("tailwindcss/defaultTheme")
const { spacing, customColors, customScale, customScreens } = require("./src/styles/tokens")

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
			screens: customScreens,
			scale: customScale,
			spacing: spacing,
		},
	},

	plugins: [require("tailwindcss-animate")],
}

module.exports = config
