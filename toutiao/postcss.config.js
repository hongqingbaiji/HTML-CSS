// postcss的配置文件
// 如果报错或者没有生效，记得将下 postcss-pxtorem 的版本 @5.1.1
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};