import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import unocss from 'unocss/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss(),
    react(),
    eslintPlugin(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      autoInstall: true,
    }),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['react', 'react-i18next', 'react-router-dom'],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      defaultExportByFilename: true,
      resolvers: [
        IconsResolver({
          componentPrefix: 'Icon',
          enabledCollections: ['mdi'],
        }),
      ],
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
    },
  },
  build: {
    reportCompressedSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
    cors: true, // 跨域设置允许
    strictPort: true, // 如果端口已占用直接退出
  },
});
