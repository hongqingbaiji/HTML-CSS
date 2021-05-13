<template>
  <div class="cart-bottom-bar">
    <div class="select">
      <check-button class="check-btn" 
                    @click.native="checkAllClick" 
                    :is-checked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计:{{totalPrice}}</div>
    <div class="calculate">去计算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  props:{
    info:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkAllClick(){
      if(this.isSelectAll){
        this.$store.getters.cartList.forEach(item => item.checked = false)
      }else {
        this.$store.getters.cartList.forEach(item => item.checked = true)
      }
    }
  },
  computed:{
    totalPrice(){
      return '￥' + this.$store.getters.cartList
        .filter(item=>item.checked)
        .reduce((preValue,item)=>{
          return preValue + item.price * item.count
        },0).toFixed(2)
    },
    checkLength(){
      return this.$store.getters.cartList
        .filter(item=>item.checked).length
    },
    isSelectAll(){
      if(this.$store.getters.cartList.length === 0){
        return false;
      }
      return !this.$store.getters.cartList.find(item=> !item.checked)
    }
  },

}
</script>

<style scoped>
  .cart-bottom-bar{
    display: flex;
    position:fixed;
    bottom:49px;
    left:0;
    right:0;
    height:40px;
    background-color: #e1e2e3;
    line-height: 40px;
    font-size: 14px;
    justify-content: space-between;
    
  }
  .select{
    display:flex;
    align-items: center;

  }
  .check-btn{
    margin:0 5px 0 10px;
    line-height: 16px;
  }

  .calculate{
    background-color: orangered;
    color:#fff;
    padding:0 10px;
    
  }

</style>
