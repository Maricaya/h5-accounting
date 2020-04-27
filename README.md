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

# Icon 组件
## 用 svg-sprite-loader 实现自己的Icon组件
从设计图中切出 svg 文件，但是我不想每次引入icon的时候都写一大堆:
```html
   <img src="xxxxxx/icons/chart.svg" alt="" />
```
而且使用这种方式想修改图标的颜色或者大小，只能修改 svg 源文件，或者让 UI 小姐姐重新切图，非常麻烦。

最好能实现类似 element-ui 的引入效果：
```html
<Icon name="icon-file-name" />
```
下面一起来看看是如何实现的吧！

# 工作原理
```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0" aria-hidden="true" id="__SVG_SPRITE_NODE__">
    <symbol xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" id="money">
    </symbol>
</svg>
```
这个时候就可以使用 svg-use 啦。
但是这种方式还是有很多重复代码，能不能实现进一步的封装呢？最好是这种形式 `<Icon name="money"/>`

```html
<svg fill="red" class="icon">
  <use xlink:href="#money"/>
</svg>
```

下面来看看实现方法吧！

安装 svg-sprite-loader
```bash
# 显示config配置文件
# 不能撤销
yarn eject
yarn add --dev svg-sprite-loader
yarn add --dev svgo-loader
```
配置webpack.config.js
```
{
  test: /\.svg$/,
  use: [
    { loader: 'svg-sprite-loader', options: {} },
    { loader: 'svgo-loader', options: {} }
  ]
}
```
这样引入项目中的 svg 文件会经过 svgo-loader => svg-sprite-loader 的处理。在页面中生成 svg-symbols


## Icon 组件化
icon.tsx
```tsx
import React from 'react'
// TreeShaking 不适用于 require
require('icons/money.svg')
require('icons/tag.svg')
require('icons/chart.svg')

type Props = {
  name: String
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name} />
    </svg>
  )
}

export default Icon;
```

## 不想一直重复引入，需要 require 一个目录

在 icon.tsx 文件中引入 svg 需要一个一个引入
`
require('icons/money.svg')
// require('icons/tag.svg')
// require('icons/chart.svg')
`
// 不想一直重复引入，需要 require 一个目录

`let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext
 try {importAll(require.context('icons', true, /\.svg$/));} catch(e){}
`
webpack-env 支持ts
`yarn add --dev @types/webpack-env`

## Layout 组件化