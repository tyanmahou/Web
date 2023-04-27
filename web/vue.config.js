const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  configureWebpack: {
    watchOptions :{
      aggregateTimeout: 300,
      poll: 1000
    }
  }  
})
