import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic',
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
    exclude: [],
    // Only force re-optimization when troubleshooting React issues
    // Remove or set to false for better performance after confirming everything works
    // force: true,
  },
  build: {
    // Minify JavaScript (esbuild is faster and included by default)
    minify: 'esbuild',
    // Tree shaking is automatically enabled by Rollup (no need to specify)
     // Code splitting - improved chunking strategy
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion') || id.includes('motion') || id.includes('lenis')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            // Other node_modules go into vendor chunk
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    // Source maps for production debugging (optional)
    sourcemap: false,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller bundles
    target: 'es2015',
    // Minify CSS
    cssMinify: true,
  },
  // Server configuration
  server: {
    port: 5173,
    open: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
});
