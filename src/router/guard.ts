import { useStore } from '@/stores'
import NProgress from 'nprogress'
import type { RouteLocationNormalized } from 'vue-router'

/**
 * 全局前置守卫
 */
export const beforeEach = ({ name }: RouteLocationNormalized) => {
  NProgress.start()
  const store = useStore()
  if (store.token) {
    return name !== 'login' || { name: 'dashboard' }
  } else {
    return name === 'login' || { name: 'login' }
  }
}

/**
 * 全局后置守卫
 */
export const afterEach = () => {
  NProgress.done()
}
