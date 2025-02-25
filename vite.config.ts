import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TraeCPAWeb/', // Updated to match your actual repo name
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: `assets/[name].[hash].mjs`,
        chunkFileNames: `assets/[name].[hash].mjs`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  }
})
