import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- IMPORT THIS
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- ADD THIS HERE
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})