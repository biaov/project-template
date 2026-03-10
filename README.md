# project-template

项目初始化模板

## 分支命名规则

- 主分支：`vue`, `uni-app`, `react`, `node`, `electron`, `cli`
  - 各个主分支代表着不同的项目模板
- 开发分支
  - 功能分支：`feature/主分支/时间/功能名称`, 如 `feature/vue/20230901/demo`
  - BUG 修复分支：`hotfix/主分支/时间/功能名称`, 如 `hotfix/vue/20230901/demo`

## Node

- 关于 `Node` 项目的模板

<h2 align="center">
  <a href="https://gitee.com/biaovorg/project-template/tree/node"><img src="https://img.shields.io/badge/version-v1.1.41-blue" alt="版本" /></a>
  <a href="https://gitee.com/biaovorg/project-template/blob/node/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license" /></a>
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

- `Vite` + `TS` + `Node` + `typeorm` + `nestjs` + `mysql`

## 示例

- [ecosystem](https://github.com/biaov/ecosystem/tree/main/server)

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/project-template)](https://github.com/biaov/project-template/graphs/contributors)
