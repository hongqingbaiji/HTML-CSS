// postcss的配置文件
// 如果报错或者没有生效，记得降下 postcss-pxtorem 的版本 @5.1.1
module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同浏览器的
    // VueCLI内部已经配置过 autoprefixer 把这个配置放到 .browserslistrc 文件中
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      // 转换的根元素基准值
      // 正常情况下按照设计稿来， 750宽就写75
      rootValue: 37.5,

      // 配置需要转换的 css 属性，有单位的都要转
      propList: ['*'],
    },
  },
};