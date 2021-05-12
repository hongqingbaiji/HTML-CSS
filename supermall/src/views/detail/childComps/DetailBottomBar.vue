<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    <!-- <sport-ball ref="ball" class="sport-ball"></sport-ball> -->
  </div>
</template>

<script>

export default {
  name:'DetailBottomBar',
  methods:{
    addToCart() {
      this.$emit('addToCart'); 
    }
  }
}
</script>

<style>
  .bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 58px;
    background-color: #fff;
    box-shadow: -3px 0 3px rgba(0,0,0,.3);
    
    display: flex;
    text-align: center;
  }
  .bar-left{
    flex:50%;
    display: flex;
  }
  .bar-left>div{
    flex:1;
  }
  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .text{
    font-size: 13px;
  }
  .bar-left .service{
    background-position: 0 -54px;
  }
  .bar-left .shop{
    background-position: 0 -98px;
  }
  .bar-right{
    flex:50%;
    display: flex;
    line-height: 58px;
  }
  .bar-right .cart{
    flex:60%;
  }
  .bar-right .buy{
    flex:40%;
  }
  .cart{
    background-color: #ffe817;
    color:#333;
  }
  .buy{
    background-color: #ff6699;
    color:#fff;
  }

</style>