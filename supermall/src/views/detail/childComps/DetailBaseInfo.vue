<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span class="spanL">{{goods.columns[0]}}</span>
      <span class="spanC">{{goods.columns[1]}}</span>
      <span class="spanR">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props:{
    goods:{
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
  .base-info{
    margin-top:15px;
    padding:0 8px;
    color:#999;
    border-bottom:5px solid #f2f5f8;
  }
  .info-title{
    font-size: 16px;
    color:#222;
    line-height: 22px;
  }
  .info-price{
    margin: 15px 0 20px;
  }
  .n-price{
    color:var(--color-high-text);
    font-size:22px;
  }
  .o-price{
    font-size: 14px;
    text-decoration: line-through;
    padding:0 5px;
  }
  .discount{
    background-color: var(--color-high-text);
    font-size: 14px;
    padding:2px 5px;
    color:#fff;
    border-radius: 10px;
    position:relative;
    top:-8px;
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    height: 30px;
    line-height:30px;
    margin-top:15px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-service{
    display: flex;
    justify-content: space-between; 
    height: 60px;
    line-height: 60px;
  }
  .info-service-item img{
    width: 14px;
    height: 14px;
    position: relative;
    top:2px;
    margin-right: 2px;
  }
  .info-service-item span{
    font-size: 13px;
    color:#333;
  }

</style>
