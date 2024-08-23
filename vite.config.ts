import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import tailwindcss from 'tailwindcss'

const spacing: Record<string, string> = {}

Array.from({ length: 1000 }, (_, i) => {
  spacing[i] = `${i}px`
})

const env = loadEnv('development', './')

export default defineConfig({
  plugins: [
    eslint({
      lintOnStart: true,
      exclude: ['node_modules', 'dist']
    }),
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
        target: env.VITE_PROXY_BASE_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
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
        additionalData: `@import '@/styles/vars.less';`
      }
    },
    postcss: {
      plugins: [
        tailwindcss({
          content: ['./src/**/*.vue'],
          theme: {
            spacing,
            extend: {
              fontSize: ({ theme }) => theme('spacing'),
              borderRadius: ({ theme }) => theme('spacing')
            }
          },
          corePlugins: {
            preflight: false
          }
        })
      ]
    }
  }
})
