import Vue from 'vue'
import VueRouter from 'vue-router'

import Yxjhd from 'views/yxjhd/Yxjhd'

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/yxjhd'
}, {
  path: '/yxjhd',
  component: Yxjhd
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router