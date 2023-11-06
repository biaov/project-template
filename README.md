# project-template

项目初始化模板

## 分支命名规则

- 主分支：`vue`, `uni-app`, `react`, `node`, `node-simple`, `electron`, `cli`
  - 各个主分支代表着不同的项目模板
- 开发分支
  - 功能分支：`feature/主分支/时间/功能名称`, 如 `feature/vue/20230901/demo`
  - BUG 修复分支：`hotfix/主分支/时间/功能名称`, 如 `hotfix/vue/20230901/demo`

## Node

- 关于简单的 `Node` 项目的模板

<h2 align="center">
  <a href="https://gitee.com/biaovorg/project-template/tree/node-simple"><img src="https://img.shields.io/badge/version-v1.0.5-blue" /></a>
  <a href="https://gitee.com/biaovorg/project-template/blob/node-simple/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" /></a>
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

- 短横线命名(kebab-case): 文件名
- 帕斯卡命名(PascalCase, 大驼峰命名: CamelCase): 枚举命名, 类型命名, 类命名
- 小驼峰命名(camelCase): 变量命名

### 技术栈

- `Vite` + `TS` + `Node` + `Express` + `sequelize` + `mysql`

### 依赖特性

- `express`: Node 开发框架
- `@types/express`: `express` 的类型
- `@types/node`: `node` 的类型
- `terser`: 压缩代码
- `typescript`: 编程语言
- `vite`: 项目构建工具
- `vite-plugin-node`: vite 插件，开启 Node.js 服务器

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/project-template)](https://github.com/biaov/project-template/graphs/contributors)
