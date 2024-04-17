import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css'

/** @type {import('vite').UserConfig} */

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['src'],
      insertTypesEntry: true,
    }),
    libInjectCss()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@col-ui/components',
      formats: ['es', 'umd'],
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
