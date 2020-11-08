
# 项目介绍


使用 React + Typescript 构建的记账h5，暂使用 LocalStorage 作为本地数据库，后期会改为 node。

预览页面：https://maricaya.github.io/money-website/#/money

本项目只有4个页面，但作为入门项目已经够用了。

# 项目搭建
[使用 webpack4.0 从零搭建 React + TypeScript 应用](https://juejin.im/post/6850418115189309447)
[Create React App 中配置 CSS (css normalize、scss、styled-components) 的正确姿势](https://juejin.im/post/5f10464be51d451dde2e60f5)
[使用 svg-sprite-loader、svgo-loader 优化项目中的 Icon](https://juejin.im/post/5f184a7bf265da22de3e0749)

## 资源根目录 src 的表示方法
在 `tsconfig.json` 中配置根目录 `"baseUrl": "src"`。
在访问文件时，直接写到根目录的文件名称。比如 src/index/index.tsx 文件
-   vue `@/index/index.tsx`
-   react `index/index.tsx`

