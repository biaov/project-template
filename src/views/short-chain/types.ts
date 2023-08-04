export interface TableItem {
  id: number
  content: string
  link: string
}

export interface TableData {
  list: TableItem[]
  total: number
  pageSize: number
  current: number
}
