'use strict'
const pathUtil = require('path')

const name = 'vue3-test' // page title

module.exports = {
  // 基本路径 baseURL已经过时
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 5566,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': pathUtil.resolve('src')
      }
    }
  }
}
