import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { beforeEach, afterEach } from './guard'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'dashboard' }
    },
    {
      path: '/',
      component: () => import(`@/views/layout/index.vue`),
      redirect: { name: 'dashboard' },
      children: routes
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(`@/views/login/index.vue`)
    }
  ]
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)
