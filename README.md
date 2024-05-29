# project-template

项目初始化模板

## 分支命名规则

- 主分支：`vue`, `uni-app`, `react`, `node`, `electron`, `cli`
  - 各个主分支代表着不同的项目模板
- 开发分支
  - 功能分支：`feature/主分支/时间/功能名称`, 如 `feature/vue/20230901/demo`
  - BUG 修复分支：`hotfix/主分支/时间/功能名称`, 如 `hotfix/vue/20230901/demo`

## uni-app

- 关于 `uni-app` 项目的模板

<h2 align="center">
  <a href="https://gitee.com/biaovorg/project-template/tree/uni-app"><img src="https://img.shields.io/badge/version-v1.2.18-blue" alt="版本" /></a>
  <a href="https://gitee.com/biaovorg/project-template/blob/uni-app/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license" /></a>
  <a href="https://gitee.com/biaovorg/project-template/blob/uni-app/.eslintrc.js"><img src="https://img.shields.io/badge/eslint-prettier-blue?logo=eslint" alt="eslint"  /></a>
</h2>

### 安装依赖

```sh
npm i
```

### 运行项目

```sh
npm run dev:%PLATFORM%
```

### 打包项目

```sh
npm run build:%PLATFORM%
```

### 命名规范

- 短横线命名(kebab-case): 文件名, class 类命名, 自定义属性传参
- 帕斯卡命名(PascalCase, 大驼峰命名: CamelCase): 枚举命名, 类型命名
- 小驼峰命名(camelCase): 变量命名, HTML id 属性命名, 自定义属性定参

### 技术栈

- `Vite` + `TypeScript` + `Vue` + `Less` + `Pinia` + `uni-app`

### 依赖特性

#### dependencies

- `@dcloudio/uni-app`: 一份代码编译成不同平台
- `@dcloudio/uni-app-plus`: 解析成 APP
- `@dcloudio/uni-components`: uni-app 组件库
- `@dcloudio/uni-h5`: 解析成 H5
- `@dcloudio/uni-mp-weixin`: 解析成微信小程序
- `dayjs`: 时间处理工具
- `pinia`: 状态管理器
- `vue`: 前端框架
- `vue-i18n`: Vue 国际化

#### devDependencies

- `@dcloudio/types`: `dcloud` 类型声明
- `@dcloudio/uni-automator`: 自动化测试工具
- `@dcloudio/uni-cli-shared`: 公共函数库
- `@dcloudio/uni-stacktracey`: 错误信息收集工具
- `@dcloudio/vite-plugin-uni`: 优化 Uni-app 应用程序的构建过程
- `@types/node`: `node` 的类型声明
- `@typescript-eslint/eslint-plugin`: 检测和修复 TS 代码
- `@typescript-eslint/parser`: 解析 TS 代码并生成抽象语法树（AST），以供 eslint 进行代码检查
- `@vitejs/plugin-vue`: Vite 解析 Vue 文件
- `eslint`: 代码检查工具
- `eslint-config-airbnb-base`: airbnb-base 代码编写规范
- `eslint-config-prettier`: 将 Prettier 规则集成到 ESlint 检查中
- `eslint-plugin-import`: 检测和修复 JS 中的模块导入导出问题
- `eslint-plugin-prettier`: 检测不符合 Prettier 格式的代码
- `eslint-plugin-vue`: 检测和修复 Vue 代码
- `less`: CSS 预编译器
- `prettier`: 代码格式化
- `typescript`: 编程语言
- `unplugin-auto-import`: 自动引入模块，主要用于全局模块，如 `vue`
- `unplugin-vue-components`: 自动引入并注册组件，主要用于全局组件，如 `src/components`
- `vite`: 项目构建工具
- `vite-plugin-eslint`: 将 ESlint 集成到 Vite 中

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/project-template)](https://github.com/biaov/project-template/graphs/contributors)

<!--
npm i @dcloudio/uni-app@vue3 @dcloudio/uni-app-plus@vue3 @dcloudio/uni-components@vue3 @dcloudio/uni-h5@vue3 @dcloudio/uni-mp-weixin@vue3 @dcloudio/uni-automator@vue3 @dcloudio/uni-cli-shared@vue3 @dcloudio/uni-stacktracey@vue3 @dcloudio/vite-plugin-uni@vue3
-->
