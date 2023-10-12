import { program } from 'commander' // 自动解析命令和参数
import chalk from 'chalk' // 添加字体颜色
import log from '@/utils/log' // 日志

/**
 * 演示 demo
 */
export const handleDemo = async (name = '默认输出') => {
  log.success(name)
}

/**
 * 定义顶级命令的 action
 */
export const handleArguments = (cmd: any, env: any) => {
  /**
   * 输出错误
   */
  log.error(chalk.redBright(`\`cli ${cmd}${env ? ` ${env}` : ''}\` 命令不存在`))
  /**
   * 显示全部命令
   */
  program.help()
}
