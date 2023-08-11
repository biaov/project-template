import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'

const config: UserConfigExport = {
  plugins: [
    eslint(),
    vue(),
    autoImport({
      imports: ['vue', 'vue-router'],
      ignore: ['types.ts'],
      dirs: ['./src/composables'],
      dts: './types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './types/.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/node_modules/, 'types.ts'],
      dts: './types/components.d.ts'
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 8090,
    proxy: {
      '/api': {
        // target:'http://desktop.biaov.cn'
        target: 'http://127.0.0.1:3500',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api/')
      }
    }
  },
  resolve: {
    // 路径别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    // 配置预编译器
    preprocessorOptions: {
      less: {
        additionalData: `@import '@/styles/variable.less';`
      }
    }
  }
}

export default defineConfig(config)
