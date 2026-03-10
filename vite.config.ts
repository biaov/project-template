import { defineConfig } from 'vite'
import type { InlineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import electron from 'vite-plugin-electron/simple'
import tailwindcss from '@tailwindcss/vite'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'

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
    tailwindcss(),
    vue(),
    // electron({
    //   main: {
    //     entry: 'electron/main.ts',
    //     vite: {
    //       ...sameViteConfig,
    //       ...electronBuild
    //     }
    //   },
    //   preload: {
    //     input: resolve(__dirname, 'electron/preload.ts'),
    //     vite: electronBuild
    //   },
    //   renderer: {}
    // }),
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
