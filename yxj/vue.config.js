const path = require('path'); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('./src/components'))
      .set('network', resolve('./src/network'))
      .set('common', resolve('./src/common'))
      .set('views', resolve('./src/views'))
  },
  devServer: {
    port: '8080',
    host: '192.168.26.142',
    open: true,
    proxy: {
      '/ajax': { //业务类的接口请求地址，这里的api可以是后端的工程名
        changeOrigin: true,
        target: 'http://admin.66rpg.com',
      },
      // '/': { //websoket请求接口地址
      //   ws: true,
      //   target: 'ws://localhost:8080/'
      // }
    }
  }
}