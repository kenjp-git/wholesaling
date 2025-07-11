import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.tsx',
                // 'resources/js/Pages/Error.tsx',
                // 'resources/js/Pages/Home.tsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: true,
        hmr: {
            host: process.env.VITE_HMR_HOST,
            port: process.env.VITE_HMR_PORT
        }
    }
});
