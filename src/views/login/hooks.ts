import { useRouter } from 'vue-router'
import { useStore } from '@/store'

/**
 * 操作
 */
export const useHandle = () => {
  const router = useRouter()
  const store = useStore()

  /**
   * 提交
   */
  const onSubmit = () => {
    store.login({ token: 'token' })
    router.push({ name: 'dashboard' })
  }

  return { onSubmit }
}
