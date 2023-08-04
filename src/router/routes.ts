import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: 'login',
    name: 'login',
    component: () => import(`@/views/login/index.vue`)
  },
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import(`@/views/dashboard/index.vue`)
  }
]
