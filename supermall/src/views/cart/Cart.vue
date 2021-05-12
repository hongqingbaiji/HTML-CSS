<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll';

import CartBottomBar from './childComps/CartBottomBar';
import CartList from './childComps/CartList'

import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  data() {
    return {

    }
  },
  computed:{
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  },
  activated(){
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
  .cart{
    position: relative;
    height: 100vh;
    background-color: #fff;
  }
  .cart-nav-bar{
    background-color: var(--color-tint);
    color:#fff;
    position: relative;
    z-index:9;
  }
  .content{
    position:absolute;
    top:44px;
    bottom:89px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

</style>

