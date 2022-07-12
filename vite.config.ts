import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  alias: { '@': path.resolve(__dirname, 'src') },
  server: {
    host: '192.168.0.105'
  }
})
