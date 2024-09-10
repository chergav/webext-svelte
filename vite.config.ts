import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest';
import packageJson from './package.json';

export default defineConfig({
	build: {
		target: 'esnext',
	},
	resolve: {
		alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
	},
	plugins: [
		crx({ manifest }),
		svelte(),
	],
	define: {
		__NAME__: JSON.stringify(packageJson.name),
	},
});
