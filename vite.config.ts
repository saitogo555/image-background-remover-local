import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/image-background-remover-local/' : '/',
  plugins: [solid()],
  optimizeDeps: {
    exclude: ['@imgly/background-removal', 'onnxruntime-web']
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    },
    fs: {
      strict: false
    }
  },
  preview: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  }
})
