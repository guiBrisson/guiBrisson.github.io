import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base:"/guiBrisson.github.io/",
	plugins: [sveltekit()]
});
