const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: {
      ignoreOrder: true
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].minify = {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
      }
      return args
    })
  }
})