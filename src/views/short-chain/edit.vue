<style lang="less" scoped>
@import './edit.less';
</style>
<template>
  <a-row class="default-page" justify="center">
    <a-card title="新增短链" class="w-700">
      <a-form v-bind="cols">
        <a-form-item label="短链内容" v-bind="validateInfos.content">
          <a-input v-model:value="formState.content" placeholder="请输入需要生成的短链"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="onSubmit">提交</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </a-row>
</template>
<script lang="ts" setup>
import { cols } from '@/config/form'
import { useForm } from './hooks'

const { formState, validateInfos, onSubmit } = useForm()
</script>
