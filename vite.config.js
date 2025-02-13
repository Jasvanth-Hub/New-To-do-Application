import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/index-[hash].js`,
        assetFileNames: `assets/index-[hash][extname]`,
      },
    },
  },
})
