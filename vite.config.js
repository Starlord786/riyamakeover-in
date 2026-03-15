import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.lottie'],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation libraries (large)
          'vendor-motion': ['framer-motion'],
          // Firebase (large SDK)
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          // Particles / animation extras
          'vendor-particles': ['react-particles', 'tsparticles-slim'],
          // UI / notification libraries
          'vendor-ui': ['react-toastify', 'lucide-react'],
          // Lottie animation players
          'vendor-lottie': ['lottie-react', '@lottiefiles/dotlottie-react'],
        },
      },
    },
  },
})
