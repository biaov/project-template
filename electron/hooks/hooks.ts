import { app, screen, Point, shell, IpcMainInvokeEvent, BrowserWindow, dialog, OpenDialogOptions } from 'electron'
import packageJson from '../../package.json'
import { AboutActionReturn, FnReturn } from '~/types'

/**
 * 主进程操作
 * @returns { Record<string, FnReturn> } 操作 API
 */
export const useActions = (): Record<string, FnReturn> => {
  const startCursorPoint: Point = { x: 0, y: 0 }
  const startWindowPoint: Point = { x: 0, y: 0 }
  const { name, version } = packageJson

  // 获取窗口
  const getWindow = () => BrowserWindow.getFocusedWindow() as BrowserWindow

  // 打开网页
  const openAction = (e: IpcMainInvokeEvent, url: string) => {
    shell.openExternal(url)
  }

  // 最小化
  const minimizeAction = () => {
    const window = getWindow()
    window.minimize()
  }

  // 最大化
  const maximizeAction = () => {
    const window = getWindow()
    window.isMaximized() ? window.unmaximize() : window.maximize()
  }

  // 退出
  const quitAction = () => {
    const window = getWindow()
    window.close()
  }

  // 移动开始点
  const startAction = () => {
    const window = getWindow()
    // 窗口坐标
    const windowPoint = window.getPosition()
    startWindowPoint.x = windowPoint[0]
    startWindowPoint.y = windowPoint[1]

    // 鼠标坐标
    const { x, y } = screen.getCursorScreenPoint()
    startCursorPoint.x = x
    startCursorPoint.y = y
  }

  // 移动
  const moveAction = () => {
    const window = getWindow()
    const { x: sx, y: sy } = startCursorPoint
    const { x: wx, y: wy } = startWindowPoint
    const { x, y } = screen.getCursorScreenPoint()
    const cx = wx + x - sx
    const cy = wy + y - sy

    window.setPosition(cx, cy, true)
  }

  // 检查更新
  const checkUpdateAction = () => app.getVersion()

  // 关于
  const aboutAction = (): AboutActionReturn => {
    return { name, version }
  }

  return {
    openAction,
    minimizeAction,
    maximizeAction,
    quitAction,
    startAction,
    moveAction,
    checkUpdateAction,
    aboutAction
  }
}
