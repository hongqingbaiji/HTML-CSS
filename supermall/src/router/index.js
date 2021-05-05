import Vue from 'vue';
import VueRouter from 'vue-router';

// 懒加载
const Home = () =>
  import ('views/home/Home');
const Category = () =>
  import ('views/category/Category');
const Cart = () =>
  import ('views/cart/Cart');
const Profile = () =>
  import ('views/profile/Profile');

//解决重复点击报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 安装插件
Vue.use(VueRouter);

// 创建路由对象
const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/category',
  component: Category
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: Profile
}];
const router = new VueRouter({
  routes,
  mode: 'history'
});

// 导出路由
export default router;