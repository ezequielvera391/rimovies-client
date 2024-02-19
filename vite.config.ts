import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@public': path.resolve(__dirname, 'public')
    }
  },
  plugins: [react()]
})
