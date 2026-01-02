import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react({
    jsxRuntime: 'automatic',
  })],
>>>>>>> 713e091 (Initial project upload)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
<<<<<<< HEAD
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
=======
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
    exclude: [],
  },
  build: {
    // Minify JavaScript
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion', '@studio-freight/lenis'],
          'vendor-ui': ['lucide-react'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Server compression
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
>>>>>>> 713e091 (Initial project upload)
  },
});
