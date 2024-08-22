<template>
  <view class="flex flex-col items-center">
    <image class="w-300" src="/static/template.svg" />

    <button class="mb-40" @click="onExit" v-if="store.state.token">退出登录</button>
    <button class="mb-40" @click="onNavToLogin" v-else>去登录</button>
    <button class="mb-40" @click="handleTest">测试请求</button>
    <view v-if="packageInfo.version">测试成功 版本：{{ packageInfo.version }}</view>
  </view>
</template>

<script setup lang="ts">
import { useStore } from '@/stores'
import { useHandle, useApiTest } from './hooks'

const store = useStore()
const { onNavToLogin, onExit } = useHandle()
const { packageInfo, handleTest } = useApiTest()
</script>
