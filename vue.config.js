module.exports = {
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        changeOrigin: true,
        // pathRewrite: { '^/api': '/api' },
        target: process.env.VUE_APP_PROXY_TARGET, // 跨域访问的目标地址
        ws: true
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
