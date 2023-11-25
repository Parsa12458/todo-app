import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import viteImagemin from 'vite-plugin-imagemin';
import inject from '@rollup/plugin-inject';

export default defineConfig({
  base: '',
  build: {
    outDir: 'docs',
  },

  // Configure Vite plugins
  plugins: [
    compression(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 50,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
    inject({
      modules: {
        regeneratorRuntime: 'regenerator-runtime/runtime',
      },
    }),
  ],

  // Configure Babel
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },

  // Configure css prefixing
  css: {
    postcss: {
      plugins: [autoprefixer({})], // add options if needed
    },
  },

  // Polyfill async functions
  optimizeDeps: {
    include: ['regenerator-runtime/runtime'],
  },
});
