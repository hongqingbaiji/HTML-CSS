import * as types from './mutation-types';

const actions = {
  addToCart({ state, commit }, info) {
    return new Promise((resolve) => {
      // 查找之前数组中是否有该商品
      // let oldProduct = null;
      // for (let item of context.state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item;
      //   }
      // }
      let oldInfo = state.cartList.find(item => item.iid === info.iid);

      // 判断oldInfo
      if (oldInfo) {
        const index = state.cartList.indexOf(oldInfo)
        commit(types.INCREMENT_COUNT, index)
        resolve('当前商品数量+1')
      } else {
        info.count = 1
        info.checked = true
        commit(types.ADD_TO_CART, info)
        resolve('已添加至购物车')
      }

      resolve()
    })
  }
}

export default actions;