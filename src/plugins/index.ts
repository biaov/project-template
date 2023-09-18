import type { App } from 'vue'
import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'
import { router } from '@/router'
import 'ant-design-vue/dist/reset.css'
import 'nprogress/nprogress.css'

const install = (app: App) => {
  app.use(Antd)
  app.use(createPinia())
  app.use(router)
}

export default { install }
