import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import(`@/views/dashboard/index.vue`)
  },
  {
    path: 'short-chain',
    component: () => import(`@/views/layout/template.vue`),
    redirect: {
      name: 'short-chain-list'
    },
    children: [
      {
        path: 'list',
        name: 'short-chain-list',
        component: () => import(`@/views/short-chain/index.vue`)
      },
      {
        path: 'add',
        name: 'short-chain-add',
        component: () => import(`@/views/short-chain/edit.vue`)
      }
    ]
  },
  {
    path: 'analy/:link',
    name: 'analy',
    component: () => import(`@/views/analy/index.vue`)
  }
]
