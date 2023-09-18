<style lang="less" scoped>
@import './index.less';
</style>
<template>
  <a-space class="wrap" :size="40">
    <a-card title="仪表板" class="card">
      <a-space direction="vertical">
        <img src="@/assets/template.svg" alt="" />
        <a-button type="primary" @click="onExit">退出登录</a-button>
      </a-space>
    </a-card>
    <a-card title="接口请求" class="card">
      <a-space direction="vertical">
        <img src="@/assets/template.svg" alt="" />
        版本：{{ packageInfo.version }}
        <a-button type="primary" @click="handleTest">测试</a-button>
      </a-space>
    </a-card>
    <a-card title="短链" class="card">
      <a-space direction="vertical">
        <img src="@/assets/template.svg" alt="" />
        <a-button type="primary" @click="onLink">短链</a-button>
      </a-space>
    </a-card>
  </a-space>
</template>
<script setup lang="ts">
import { useApiTest, useUserHandle } from './hooks'

const { packageInfo, handleTest } = useApiTest()
const { onExit, onLink } = useUserHandle()
</script>
