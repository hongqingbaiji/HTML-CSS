import Vue from 'vue';
import App from './App.vue';

// 引入初始化的CSS和字体图标
import './assets/css/reset.css';
import './assets/font/iconfont';

// 解决快速点击延迟300ms问题
import FastClick from 'fastclick';
FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')