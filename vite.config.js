import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@views': path.resolve(__dirname, './src/views'),
      '@layouts': path.resolve(__dirname, './src/views/layouts'),
      '@pages': path.resolve(__dirname, './src/views/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@hoc': path.resolve(__dirname, './src/hoc'),
      '@guards': path.resolve(__dirname, './src/guards'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@contexts' : path.resolve(__dirname, './src/contexts'),
      '@axiosClient': path.resolve(__dirname, './src/axios-client.js'), 
      '@':  path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@UI':  path.resolve(__dirname, './src/components/UI'),
      '@store' : path.resolve(__dirname, './src/redux/store.js'),
      '@redux-slices' : path.resolve(__dirname, './src/redux/slices'),
    }, 
  },
  plugins: [react()],
})