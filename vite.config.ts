import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path"

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()   ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./"),


    },
  },

    optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  },
    build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          ui: ['lucide-react', 'sonner']
        }
      }
    }
  }, 


})
