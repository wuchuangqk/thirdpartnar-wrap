import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: { '@': path.resolve(__dirname, 'src') },
  server: {
    host: '192.168.0.105'
  }
})
