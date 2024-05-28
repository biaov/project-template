import { resolve } from 'path'
import { external, vitePluginCopyAssets } from './scripts'

const { dirname } = import.meta

/**
 * 配置文件
 */
export default {
  resolve: {
    alias: {
      '@': resolve(dirname, './src')
    }
  },
  plugins: [vitePluginCopyAssets()],
  build: {
    target: 'node20',
    outDir: resolve(dirname, './dist/dist'),
    lib: {
      entry: resolve(dirname, './src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: [...external, 'path', 'child_process', 'fs'],
      output: {
        entryFileNames: '[name].js'
      }
    },
    ssr: false,
    ssrManifest: false,
    emptyOutDir: true
  }
}
