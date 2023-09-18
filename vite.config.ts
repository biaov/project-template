import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8090
  },
  resolve: {
    /**
     * 路径别名
     */
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    /**
     * 配置预编译器
     */
    preprocessorOptions: {
      less: {
        additionalData: `@import '@/styles/variable.less';`
      }
    }
  },
  build: {
    outDir: './dist/resources/vue',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'ant-design-vue': ['ant-design-vue', '@ant-design/icons-vue']
        }
      }
    },
    chunkSizeWarningLimit: 600,
    commonjsOptions: {
      ignoreTryCatch: false
    }
  }
})
