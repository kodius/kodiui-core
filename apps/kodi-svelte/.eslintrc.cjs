module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"plugin:tailwindcss/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "tailwindcss"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"],
	},
	rules: {
		"tailwindcss/no-custom-classname": "off",
		"tailwindcss/classnames-order": "error",
		"@typescript-eslint/no-var-requires": "off",
	},
	settings: {
		tailwindcss: {
			callees: ["cn"],
			config: "tailwind.config.js",
		},
	},
	ignorePatterns: ["public/build/"],
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
	],
}
