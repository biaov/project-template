/**
 * 分页
 */
export type Pagination = {
  showSizeChanger: boolean
  showQuickJumper: boolean
  pageSizeOptions: string[]
  showTotal: (total: number) => string
  current: number
  pageSize: number
  total: number
}
