import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import tailwindcss from 'tailwindcss'

const spacing: Record<string, string> = {}

Array.from({ length: 1000 }, (_, i) => {
  spacing[i] = `${i}px`
})

export default defineConfig({
  base: './',
  plugins: [
    eslint({
      lintOnStart: true,
      exclude: ['node_modules', 'dist']
    }),
    react()
  ],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'global'
      }
    },
    entries: []
  },
  server: {
    host: '0.0.0.0',
    port: 8090
  },
  resolve: {
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
          content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
