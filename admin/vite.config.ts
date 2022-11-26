import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
  proxy: {
      '/rooms': "http://localhost:3005/api/rooms/",
  },
  },
  plugins: [react()]

}

)
