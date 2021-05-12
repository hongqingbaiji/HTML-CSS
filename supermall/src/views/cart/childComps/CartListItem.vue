<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button :is-checked="info.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-left">
      <img :src="info.image">
    </div>
    <div class="item-right">
      <h5 class="item-title">{{info.title}}</h5>
      <div class="item-desc">{{info.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">{{getFinalPrice(info.price*info.count)}}</div>
        <div class="item-count right">
          <button class="decrement" :disabled="info.count <=1" @click="decrement">-</button>
          {{info.count}}
          <button class="increment" @click="increment">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CheckButton from 'components/content/checkButton/CheckButton';

export default {
  name: 'CartListItem',
  props:{
    info:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  data() {
    return {

    }
  },
  methods:{
    decrement(){
      this.info.count--;
    },
    increment(){
      this.info.count++;
    },
    getFinalPrice(price){
      return '￥'+price.toFixed(2);
    },
    checkClick(){
      this.info.checked = !this.info.checked;
    }

  },
  computed:{
    prices(){
      return this.info.reduce((total, p)=>{
        return total + p.price * p.count;
      },0);
    }
  }
}
</script>

<style scoped>
  .cart-list-item{
    width: 100%;
    display:flex;
    height: 120px;
    padding:5px;
    border-bottom:1px solid #ccc;

  }
  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-left{
    padding: 5px;
  }
  .item-left img{
    width: 80px;
    height: 100px;
    border-radius: 6px;
  }
  .item-right{
    font-size: 18px;
    padding:5px 10px;
    overflow: hidden;
    position: relative;
    color:#333;
  }

  .item-title,.item-desc{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis; 
  }
  .item-desc{
    font-size: 13px;
    margin-top:15px;
    color:#666;
  }
  .item-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .item-price{
    color:orangered;
  }
  .decrement, .increment{
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    margin:0 5px;
  }



</style>
