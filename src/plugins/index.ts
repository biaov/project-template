import type { App, Component } from 'vue'
import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'
import { router } from '@/router'
import components from '@/components'
import 'ant-design-vue/dist/reset.css'
import 'nprogress/nprogress.css'

export const install = (app: App) => {
  app.use(Antd)
  app.use(createPinia())
  app.use(router)
  Object.values(components).forEach(({ default: component }) => {
    app.component(component.name as string, component)
  })
}
