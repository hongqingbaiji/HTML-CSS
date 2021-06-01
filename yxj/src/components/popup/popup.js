import Popup from './Popup';

const obj = {}

obj.install = function(Vue) {
  // 创建组件构造器
  const popupContrustor = Vue.extend(Popup)

  // 用new的方式，根据组件构造器，可以创建出来一个组件对象
  const popup = new popupContrustor()

  // 将组件对象，手动挂载到某一个元素上
  popup.$mount(document.createElement('div'))

  // popup.$el对应的就是div
  document.body.appendChild(popup.$el)

  Vue.prototype.$popup = popup;
}

export default obj