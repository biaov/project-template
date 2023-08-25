import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'

export default defineConfig({
  base: './',
  plugins: [
    eslint(),
    uni(),
    autoImport({
      imports: ['vue', { '@dcloudio/uni-app': ['onShow', 'onLaunch', 'onHide', 'onLoad'] }],
      ignore: ['types.ts'],
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
  }
})
