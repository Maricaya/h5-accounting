# 项目介绍
使用 React + Typescript 构建的记账h5，暂使用 LocalStorage 作为本地数据库，后期会改为 node。

视觉稿 https://www.figma.com/file/493MWONLQcmwH5bAHUbWEw/%E6%97%BA%E8%B4%A2%E8%AE%B0%E8%B4%A6?node-id=61%3A41

本项目只有4个页面，但作为入门项目已经够用了。

# 项目搭建
## 初始化
```bash
yarn global add create-react-app@3.4.1

create-react-app h5-book --template typescript

cd h5-book

yarn start
```
## css normalize
-   index.css 上添加 `@import-normalize;` 即可
-   作用：保证页面在不同浏览器上默认样式相近。（css reset:将默认样式重写）
-   编辑器会报错，不用管

## 支持scss
安装dart-scss
```bash
# node-sass 下载速度慢、本地编译慢，所以改用dart-sass
# 在本地下载dart-sass, 以node-sass命名
yarn add node-sass@npm:dart-sass
```

## 资源根目录 src 的表示方法
在 `tsconfig.json` 中配置根目录 `"baseUrl": "src"`。
在访问文件时，直接写到根目录的文件名称。比如 src/index/index.tsx 文件
-   vue `@/index/index.tsx`
-   react `index/index.tsx`

## styled-components
虽然上面介绍了scss的配置，但本项目采用 styled-compoents。比sass更香的一种写法。
```bash
# 安装
yarn add styled-components
yarn add --dev @types/styled-components
```

## 安装react-router-dom
```bash
yarn add react-router-dom
# ts依赖
yarn add --dev @types/react-router-dom
```