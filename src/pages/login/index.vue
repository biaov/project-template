<template>
  <view class="flex flex-col items-center">
    <image class="w-300" src="/static/template.svg" />
    <button @click="onLogin">登录</button>
  </view>
</template>

<script setup lang="ts">
import { useHandle } from './hooks'

const { onLogin } = useHandle()
</script>
