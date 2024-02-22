# project-template

项目初始化模板

## 分支命名规则

- 主分支：`vue`, `uni-app`, `react`, `node`, `node-simple`, `electron`, `cli`
  - 各个主分支代表着不同的项目模板
- 开发分支
  - 功能分支：`feature/主分支/时间/功能名称`, 如 `feature/vue/20230901/demo`
  - BUG 修复分支：`hotfix/主分支/时间/功能名称`, 如 `hotfix/vue/20230901/demo`

## 脚手架

- 关于 `cli` 项目的模板

<h2 align="center">
  <a href="https://gitee.com/biaovorg/project-template/tree/cli"><img src="https://img.shields.io/badge/version-v1.0.8-blue" alt="版本" /></a>
  <a href="https://gitee.com/biaovorg/project-template/blob/cli/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license" /></a>
</h2>

### 安装依赖

```Basic
npm i
```

### 运行项目

```Basic
npm start
```

### 打包项目

```Basic
npm run build
```

### 命名规范

- 短横线命名(kebab-case): 文件名, class 类命名, 自定义属性传参
- 帕斯卡命名(PascalCase, 大驼峰命名: CamelCase): 枚举命名, 类型命名
- 小驼峰命名(camelCase): 变量命名, HTML id 属性命名, 自定义属性定参

### 技术栈

- `Vite` + `TypeScript` + `Node`

### 依赖特性

- `chalk`: 字体颜色
- `commander`: 命令
- `log-symbols`: 图标
- `ora`: 动画效果
- `update-notifier`: 检查更新
- `@types/node`: `node` 类型
- `@types/update-notifier`: `update-notifier` 类型
- `prettier`: 格式化工具
- `typescript`: 编程语言
- `vite`: 项目构建工具

## 贡献者们

[![贡献者们](https://contrib.rocks/image?repo=biaov/project-template)](https://github.com/biaov/project-template/graphs/contributors)
