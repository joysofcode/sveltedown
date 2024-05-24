import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import sveltedown from './src/lib/sveltedown.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [sveltedown(), vitePreprocess()],
	kit: {
		adapter: adapter()
	}
}

export default config
