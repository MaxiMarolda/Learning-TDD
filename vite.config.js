import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { // esto es para configurar vitest a simular un DOM
    environment: 'happy-dom'
  }
})
