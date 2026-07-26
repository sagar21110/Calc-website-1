import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Deployment config:
// - Replace YOUR_USERNAME with your GitHub username in package.json "homepage" field
// - Default base "/calchub-website-/" is for GitHub Pages project sites
// - For user/org sites (https://YOUR_USERNAME.github.io), set base to "/"
export default defineConfig({
    plugins: [react()],
    base: '/calchub-website-/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        // Ensure index.html is generated correctly for SPA routing
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'icons': ['lucide-react'],
                },
            },
        },
    },
});
