/**
 * 分页
 */
export interface PagingResponse {
  list: Record<string, any>[]
  total: number
  current: number
  pageSize: number
}
