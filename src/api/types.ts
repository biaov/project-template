import { TableItem } from '@/views/short-chain/types'

interface Meta {
  total: number
  current: number
  pageSize: number
}

export interface PagingResponse {
  meta: Meta
  list: TableItem[]
}
