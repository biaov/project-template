import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/stores'
import { newVersionApi } from '@/api/public'
import { PackageInfo } from './types'

/**
 * API 测试
 */
export const useApiTest = () => {
  const packageInfo = ref<PackageInfo>({}) // 版本信息

  // 接口请求
  const handleTest = async () => {
    packageInfo.value = (await newVersionApi.get()) as PackageInfo
  }

  return { packageInfo, handleTest }
}

/**
 * 用户操作
 */
export const useUserHandle = () => {
  const router = useRouter()
  const store = useStore()

  // 退出登录
  const onExit = () => {
    store.logout()
    router.push({ name: 'login' })
  }

  return { onExit }
}
