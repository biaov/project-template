<template>
  <div class="default-page">
    <a-card title="短链列表">
      <template #extra>
        <a-button type="primary" @click="onAdd">
          <template #icon>
            <file-add-outlined />
          </template>
          新增
        </a-button>
      </template>
      <a-table :dataSource="tableData.list" :pagination="transformPagination(tableData)" row-key="id" bordered @change="handlePage">
        <a-table-column title="编号" data-index="id" />
        <a-table-column title="内容" data-index="content" ellipsis />
        <a-table-column title="短链" data-index="link" />
        <a-table-column title="操作" width="200px">
          <template #default="{ record }">
            <a-popconfirm title="你确定要删除此条数据吗?" @confirm="handleDelete(record)">
              <a-button type="link" class="danger">删除</a-button>
            </a-popconfirm>
          </template>
        </a-table-column>
      </a-table>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { FileAddOutlined } from '@ant-design/icons-vue'
import { usePagination } from '@/composables/pagination'
import { useTable } from './hooks'

const { transformPagination } = usePagination()
const { tableData, handleDelete, handlePage, onAdd } = useTable()
</script>
