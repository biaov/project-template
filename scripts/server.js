const { createServer } = require('vite')
const { exec } = require('child_process')
const { resetPath } = require('./path')
const { createCompile, sharedConfig, log } = require('./create')

// vite 服务
exports.createViteServer = () =>
  createServer({
    ...sharedConfig,
    configFile: resetPath('@/vite.config.ts')
  })

// electron 服务
exports.createElectronServer = async () => {
  // 编译预览
  await createCompile({
    mode: 'development',
    configFile: resetPath('@/app/preload/vite.config.ts')
  })
  // 编译渲染程序
  await createCompile({
    mode: 'development',
    configFile: resetPath('@/app/main/vite.config.ts')
  })
  const { stdout } = await exec('electron .')
  // const spawnProgress = spawn(String(electron), ['.', ' -enable-webgl', '--no-sandbox', '--disable-dev-shm-usage'])
  stdout.on('data', log)
  stdout.on('close', () => {
    process.exit(0)
  })
  return
}