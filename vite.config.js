import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Triggering deployment verify
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: './',
  assetsInclude: ['**/*.lottie'],
})
