# project-template

项目初始化模板

## 分支命名规则

- 主分支：`vue`, `uni-app`, `react`, `node`, `electron`, `cli`
  - 各个主分支代表着不同的项目模板
- 开发分支
  - 功能分支：`feature/主分支/时间/功能名称`, 如 `feature/vue/20230901/demo`
  - BUG 修复分支：`hotfix/主分支/时间/功能名称`, 如 `hotfix/vue/20230901/demo`

## Vue

- 关于 `Vue` 项目的模板

<h2 align="center">
  <a href="https://gitee.com/biaovorg/project-template/tree/vue"><img src="https://img.shields.io/badge/version-v1.3.5-blue" alt="版本" /></a>
  <a href="https://gitee.com/biaovorg/project-template/blob/vue/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license" /></a>
  <a href="https://gitee.com/biaovorg/project-template/blob/vue/.eslintrc.js"><img src="https://img.shields.io/badge/eslint-prettier-blue?logo=eslint" alt="eslint" /></a>
</h2>

### 安装依赖

```sh
npm i
```

### 运行项目

```sh
npm start
```

### 打包项目

```sh
npm run build
```

### 命名规范

- 短横线命名(kebab-case): 文件名, class 类命名, 自定义属性传参
- 帕斯卡命名(PascalCase, 大驼峰命名: CamelCase): 枚举命名, 类型命名
- 小驼峰命名(camelCase): 变量命名, HTML id 属性命名, 自定义属性定参

### 技术栈

- `Vite` + `TypeScript` + `Vue` + `Vue-Router` + `Less` + `Pinia` + `Axios` + `ESlint`

### 依赖特性

#### dependencies

- `@ant-design/icons-vue`:
- `ant-design-vue`:
- `axios`:
- `dayjs`:
- `nprogress`:
- `vue`:
- `vue-router`:

#### devDependencies

- `@eslint/eslintrc`: eslint 识别自定义文件内容
- `@eslint/js`: eslint 解析 js
- `@tailwindcss/vite`: tailwindcss 插件
- `@types/node`: `node` 的类型声明
- `@types/nprogress`: `nprogress` 的类型声明
- `@vitejs/plugin-vue`: Vite 解析 Vue 文件
- `eslint`: 代码检查工具
- `eslint-plugin-prettier`: 检测不符合 Prettier 格式的代码
- `eslint-plugin-vue`: 检测和修复 Vue 代码
- `globals`: 全局变量配置
- `less`: CSS 预编译器
- `prettier`: 代码格式化
- `tailwindcss`: CSS 样式生成器
- `typescript`: 编程语言
- `typescript-eslint`: eslint 解析 ts
- `unplugin-auto-import`: 自动引入模块，主要用于全局模块，如 `vue`
- `unplugin-vue-components`: 自动引入并注册组件，主要用于全局组件，如 `src/components`
- `vite`: 项目构建工具
- `vite-plugin-eslint`: 将 ESlint 集成到 Vite 中

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/project-template)](https://github.com/biaov/project-template/graphs/contributors)
