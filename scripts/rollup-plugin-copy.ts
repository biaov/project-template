import type { PluginOption } from 'vite'
import { writeFileSync, copyFileSync, existsSync, readdirSync, mkdirSync, statSync, unlinkSync } from 'fs'
import { join } from 'path'
import pkg from '../package.json'

/**
 * 重写 package.json
 */
export const rewritePackage = () => {
  /**
   * 重置输出目录
   */
  const output = 'dist'
  !existsSync(output) && mkdirSync(output)

  Object.assign(pkg, { devDependencies: {}, scripts: {} })

  /**
   * 写入最新的
   */
  writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2))
}

/**
 * 拷贝目录
 */
const copyDirectory = (source: string, destination: string) => {
  const stat = statSync(source)
  if (stat.isFile()) {
    /**
     * 复制文件
     */
    existsSync(destination) && unlinkSync(destination)
    copyFileSync(source, destination)
  } else if (stat.isDirectory()) {
    /**
     * 创建目录
     */
    !existsSync(destination) && mkdirSync(destination)

    /**
     * 原有目录
     */
    const directory = readdirSync(source)
    directory.forEach(file => {
      copyDirectory(join(source, file), join(destination, file))
    })
  }
}

/**
 * 复制资源
 */
export const copyAssets = () => {
  /**
   * 根目录需要复制的文件和目录
   */
  const filePaths = ['bin', 'README.md', 'LICENSE']
  filePaths.forEach(path => {
    copyDirectory(path, `dist/${path}`)
  })
}

export default (): PluginOption => ({
  name: 'rollup-plugin-copy',
  closeBundle() {
    rewritePackage()
    copyAssets()
  }
})
