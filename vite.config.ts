import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TraeCPAWeb/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: '/Users/chrispeng/Desktop/VibCode/CPAWeb/index.html'
    }
  }
})
