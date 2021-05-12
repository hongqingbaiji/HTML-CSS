import * as types from './mutation-types';

const mutations = {
  // mutations唯一的目的是修改state中的状态
  // mutations中的每一个方法尽可能完成的事件比较单一一点  

  [types.ADD_TO_CART](state, goods) {
    goods.checked = true
    state.cartList.push(goods)
  },
  [types.INCREMENT_COUNT](state, index) {
    state.cartList[index].count += 1
  }
}

export default mutations