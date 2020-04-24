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
-   作用：保证页面在不同浏览器上默认样式相近
