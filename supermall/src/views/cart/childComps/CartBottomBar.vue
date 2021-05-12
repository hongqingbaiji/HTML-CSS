<template>
  <div class="cart-bottom-bar">
    <div class="select">
      <check-button class="check-btn"></check-button>
      <span>全选</span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .cart-bottom-bar{
    position:fixed;
    bottom:49px;
    left:0;
    right:0;
    height:40px;
    background-color: #ddd;
    
    margin:auto 0;
    
  }
  .select{
    display:flex;
    font-size:13px;

  }
  .check-btn{
    
    margin-right: 5px;
  }


</style>
