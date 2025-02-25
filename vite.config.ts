import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TraeCPAWeb/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: '/Users/chrispeng/Desktop/VibCode/CPAWeb/index.html'
      },
      output: {
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        generatedCode: 'es2015'
      }
    }
  }
})
