import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/kit/vite"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
		alias: {
			$primitives: "src/components/primitives",
			$components: "src/components",
			$styles: "src/styles/*",
			$stores: "src/lib/stores",
			$lib: "src/lib",
		},
	},
}

export default config
