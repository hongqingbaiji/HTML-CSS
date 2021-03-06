import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局css样式
import './styles/index.less'

// 加载vant组件库
import Vant from 'vant'
// 加载Vant组件库样式
import 'vant/lib/index.css'
//全局注册Vant中的组件
Vue.use(Vant)

// 加载amfe-flexible 自动设置rem 基准值（html标签字体大小）
import 'amfe-flexible'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')