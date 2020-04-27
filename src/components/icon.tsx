import React from 'react';
// svg-loader => svg-sprite-loader
// TreeShaking 不适用于 require
// require('icons/money.svg')
// require('icons/tag.svg')
// require('icons/chart.svg')

// 不想一直重复引入，需要 require 一个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext
try {importAll(require.context('icons', true, /\.svg$/));} catch(e){}

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