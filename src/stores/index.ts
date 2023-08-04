import { defineStore } from 'pinia'
import { setStorage, getStorage, removeStorage } from '@/utils/storage'
import { LoginData } from './types'

const tokenStorage = getStorage('token') as string // 缓存 token

export const useStore = defineStore('main', {
  state: () => ({
    token: tokenStorage // 登录状态
  }),
  actions: {
    // 登录
    login({ token }: LoginData) {
      this.token = token
      setStorage('token', token)
    },
    // 登出
    logout() {
      this.token = ''
      removeStorage('token')
    }
  }
})
