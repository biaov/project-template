import { useStore } from '@/stores'
import { newVersionApi } from '@/api/public'
import { PackageInfo } from './types'

/**
 * API 测试
 */
export const useApiTest = () => {
  /**
   * 版本信息
   */
  const packageInfo = ref<PackageInfo>({})

  /**
   * 接口请求
   */
  const handleTest = async () => {
    packageInfo.value = (await newVersionApi()) as PackageInfo
  }

  return { packageInfo, handleTest }
}

/**
 * 用户操作
 */
export const useUserHandle = () => {
  const router = useRouter()
  const store = useStore()

  /**
   * 退出登录
   */
  const onExit = () => {
    store.logout()
    router.push({ name: 'login' })
  }

  /**
   * 短链
   */
  const onLink = () => {
    router.push({ name: 'short-chain-list' })
  }

  return { onExit, onLink }
}
