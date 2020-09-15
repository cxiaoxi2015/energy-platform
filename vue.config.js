const webpack = require('webpack')
// const { interfaceUrl } = require('./src/config/sysConfig')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,

  // webpack插件
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },

  // webpack配置项
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
      .set('styles', resolve('./src/assets/styles'))
      .set('api', resolve('./src/api'))
  },

  css: {
    // css预设器配置项
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // require('postcss-px2rem')({
          //     remUnit: 37.5
          // })
        ]
      }
    }
  },

  devServer: {
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    // proxy: {
    //   '/api': {
    //     target: interfaceUrl,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
