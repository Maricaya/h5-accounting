
# 项目介绍
使用 React + Typescript 构建的记账h5，暂使用 LocalStorage 作为本地数据库，后期会改为 node。

预览页面：https://maricaya.github.io/money-website/#/money

本项目只有4个页面，但作为入门项目已经够用了。

# 项目搭建
[Create React App 中配置 CSS (css normalize、scss、styled-components) 的正确姿势](https://juejin.im/post/5f10464be51d451dde2e60f5)

## 资源根目录 src 的表示方法
在 `tsconfig.json` 中配置根目录 `"baseUrl": "src"`。
在访问文件时，直接写到根目录的文件名称。比如 src/index/index.tsx 文件
-   vue `@/index/index.tsx`
-   react `index/index.tsx`

## 安装react-router-dom
```bash
yarn add react-router-dom
# ts依赖
yarn add --dev @types/react-router-dom
```

## Icon 优化

## 事不过三优化思路
Layout 组件化 & 创建 Views 目录

# 封装一个函数组件
将 Styled Component 改造为 Function Component 

# 父子组件传值
