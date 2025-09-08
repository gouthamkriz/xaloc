import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons-vendor': ['lucide-react'],
          'animation-vendor': ['framer-motion']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})