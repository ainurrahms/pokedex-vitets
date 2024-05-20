import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@features': resolve(root, 'features'),
      '@components': resolve(root, 'components'),
      '@assets': resolve(root, 'assets'),
      '@reducers': resolve(root, 'reducers'),
      '@config': resolve(root, 'config'),
      '@helper': resolve(root, 'helper'),
    },
  },
});
