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
  <a href="https://gitee.com/biaovorg/project-template/tree/uni-app"><img src="https://img.shields.io/badge/version-v1.3.5-blue" alt="版本" /></a>
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

- `@dcloudio/uni-app`:
- `@dcloudio/uni-app-plus`:
- `@dcloudio/uni-components`:
- `@dcloudio/uni-h5`:
- `dayjs`:
- `vue`:
- `vue-i18n`:

#### devDependencies

- `@dcloudio/types`: `dcloud` 类型声明
- `@dcloudio/uni-automator`: 自动化测试工具
- `@dcloudio/uni-cli-shared`: 公共函数库
- `@dcloudio/uni-stacktracey`: 错误信息收集工具
- `@dcloudio/vite-plugin-uni`: 优化 Uni-app 应用程序的构建过程
- `@eslint/eslintrc`: eslint 识别自定义文件内容
- `@eslint/js`: eslint 解析 js
- `@types/node`: `node` 的类型声明
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
