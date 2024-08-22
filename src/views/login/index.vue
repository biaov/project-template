<template>
  <div class="flex justify-center pt-100">
    <a-card title="登录" class="w-500">
      <a-space direction="vertical">
        <img src="@/assets/template.svg" alt="" />
        <a-button type="primary" @click="onSubmit">提交</a-button>
      </a-space>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { useHandle } from './hooks'

const { onSubmit } = useHandle()
</script>
