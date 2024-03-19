import { resolve } from 'path'
import { isDevelopment } from '~/config/env'
import { CreateServeParam } from '~/types'

export const createServer = ({ window, path = '' }: CreateServeParam) => {
  let pageUrl: string // 页面路径
  path && (path = `#/${path}`)
  // 开发
  if (isDevelopment) {
    pageUrl = 'http://localhost:8090'
    window.webContents.openDevTools()
  } else {
    pageUrl = new URL(resolve(__dirname, '../vue/index.html'), `file://${__dirname}`).toString()
  }
  window.loadURL(pageUrl + path)
}
