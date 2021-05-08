<template>
  <div class="shop-info">
    <div class="info-logo-name">
      <img :src="shop.logo">
      <span>{{shop.name}}</span>
    </div>
    <div class="info-content">
      <div class="info-left">
        <div class="">

        </div>
      </div>
      <div class="info-right">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .info-logo-name{
    height:100px;
    line-height: 100px;
  }
  .info-logo-name img{
    width: 60px;
    height: 60px;
    border: 1px solid #ccc;
    padding:3px;
    border-radius: 50%;
    vertical-align: middle;
    margin: 0 10px;
  }
  .info-logo-name span{
    font-size: 16px;
  }
</style>
