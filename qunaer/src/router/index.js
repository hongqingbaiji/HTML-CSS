import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/home/Home';
import City from 'components/city/City';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/city',
  name: 'City',
  component: City
}];

export default new Router({
  routes,
  mode: 'history'
})