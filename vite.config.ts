import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // 🔥 This is what tells Vite: "look in the public folder!"
})
