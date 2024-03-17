import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import './env'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './local.be5g.com-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, './local.be5g.com.pem')),
    },
    // Make sure the server is accessible over the local network
    host: '0.0.0.0',
    port: 443
  },
  define: {
    'process.env': process.env,
  }
})