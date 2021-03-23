const { publicPath } = require('./config/base')

const services = {
  target: '',
  pureLandApi: '',
}

const vueConfig = {
  publicPath: publicPath,
  devServer: {
    proxy: {
      '/user-api': {
        target: services.target,
        changeOrigin: true,
        secure: false,
      },
      '/pure-land-api': {
        target: services.pureLandApi,
        changeOrigin: true,
        secure: false,
      },
    },
  },
}

module.exports = vueConfig
