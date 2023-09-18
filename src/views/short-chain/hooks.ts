import { message, Form } from 'ant-design-vue'
import { shortChainApi } from '@/api/short-chain'
import { Pagination } from '@/composables/types'
import { TableItem, TableData } from './types'

/**
 * 表格列表
 */
export const useTable = () => {
  const router = useRouter()
  /**
   * 表格数据
   */
  const tableData = ref<TableData>({
    list: [],
    total: 100,
    pageSize: 10,
    current: 1
  })

  /**
   * 加载表格数据
   */
  const loadTableData = async () => {
    const { pageSize, current } = tableData.value
    const { list, meta } = await shortChainApi.paging({ pageSize, current })
    list.forEach(item => {
      item.link = `${globalThis.location.origin}/analy/${item.link}`
    })
    tableData.value.list = list
    tableData.value.total = meta.total
  }
  loadTableData()

  /**
   * 删除操作
   */
  const handleDelete = async ({ id }: TableItem) => {
    await shortChainApi.delete(id)
    message.success('删除成功')
    loadTableData()
  }

  /**
   * 操作 page
   */
  const handlePage = ({ current, pageSize }: Pagination) => {
    tableData.value.current = current
    tableData.value.pageSize = pageSize
    loadTableData()
  }

  /**
   * 点击新增
   */
  const onAdd = () => {
    router.push({ name: 'short-chain-add' })
  }

  return { tableData, handleDelete, handlePage, onAdd }
}

/**
 * 新增/修改表单
 */
export const useForm = () => {
  const router = useRouter()
  /**
   * 表单
   */
  const formState = ref({
    content: ''
  })

  const rules = ref({
    content: [{ required: true, message: '请输入 URL 地址' }]
  })

  const { validate, validateInfos } = Form.useForm(formState, rules)

  const onSubmit = async () => {
    await validate()
    await shortChainApi.create(formState.value)
    message.success('操作成功')
    router.back()
  }

  return { formState, validateInfos, onSubmit }
}
