import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        host: '0.0.0.0'
    },
    resolve: {
        alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }]
    }
});
