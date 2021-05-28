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
  }
}

module.exports = {
  // 已省略其他配置项
  devServer: {
    proxy: {
      '/api': { //业务类的接口请求地址，这里的api可以是后端的工程名
        changeOrigin: true,
        target: 'http://192.168.1.1:8080/'
      },
      '/': { //websoket请求接口地址
        ws: true,
        target: 'ws://192.168.1.1:8080/'
      }
    }
  }

}