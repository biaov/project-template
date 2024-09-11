import { defineConfig } from 'vite'
import type { InlineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import electron from 'vite-plugin-electron/simple'
import tailwindcss from 'tailwindcss'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'

const spacing: Record<string, string> = {}

Array.from({ length: 1000 }, (_, i) => {
  spacing[i] = `${i}px`
})

const theme = {
  white: '#fff',
  primary: '#409eff',
  success: '#67c23a',
  info: '#909399',
  warning: '#e6a23c',
  danger: '#f56c6c'
}

const sameViteConfig: InlineConfig = {
  resolve: {
    /**
     * 路径别名
     */
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './electron')
    }
  }
}

const electronBuild: InlineConfig = {
  build: {
    outDir: 'dist/resources/electron'
  }
}

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'electron/main.ts',
        vite: {
          ...sameViteConfig,
          ...electronBuild
        }
      },
      preload: {
        input: resolve(__dirname, 'electron/preload.ts'),
        vite: electronBuild
      },
      renderer: {}
    }),
    autoImport({
      // 依赖自动加载
      imports: [
        'vue',
        'vue-router',
        {
          dayjs: [['default', 'dayjs']]
        }
      ],
      dirs: ['./src/composables'],
      dts: './types/auto-imports.d.ts'
    }),
    components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: './types/components.d.ts'
    })
  ],
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
              borderRadius: ({ theme }) => theme('spacing'),
              colors: theme
            }
          },
          corePlugins: {
            preflight: false
          }
        })
      ]
    }
  },
  build: {
    outDir: 'dist/resources/vue',
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
