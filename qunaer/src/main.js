import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入初始化的CSS和字体图标
import './assets/css/reset.css';
import './assets/font/iconfont.css';

// 解决快速点击延迟300ms问题
import FastClick from 'fastclick';
FastClick.attach(document.body);

// 引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

// 引入 axios
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  components: {
    App
  }
}).$mount('#app')