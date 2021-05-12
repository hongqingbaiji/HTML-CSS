<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~@/assets/img/cart/tick.svg" >
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  components: {},
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
  
}
</script>

<style scoped>
  .check-button{
    width: 20px;
    height: 20px;
    border: 2px solid #aaa;
    border-radius: 50%;
  }
  .check-button img{
    vertical-align: middle;
  }
  .check{
    border-color: orangered;
    background-color:orangered;
  }
</style>
