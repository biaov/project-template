import type { App } from 'vue'
import Antd from 'ant-design-vue'
import { router } from '@/router'
import 'ant-design-vue/dist/reset.css'
import 'nprogress/nprogress.css'
import '@/styles/tailwindcss.css'
import '@/styles/reset.less'

export const install = (app: App) => {
  app.use(Antd)
  app.use(router)
}
