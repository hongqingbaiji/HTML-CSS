<template>
  <div class="goods-param">
    <table v-for="(table,index) in goodsParam.sizes" :key="index" class="param-size">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="param-info">
      <tr v-for="(item,index) in goodsParam.infos" :key="index">
        <td class="param-info-key">{{item.key}}</td>
        <td class="param-info-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="param-image" v-if="goodsParam.image && goodsParam.image.length !== 0">
      <img :src="goodsParam.image">
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'DetailGoodsParam',
  props:{
    goodsParam:{
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
.goods-param{
  margin:20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
table{
  width:100%;
  border-collapse: collapse;
}
tr{
  height: 40px;
}
td{
  border-bottom: 1px solid #eee;
}
.param-info{
  border-top: 1px solid #eee;
}
.param-info-key{
  width: 100px;
}
.param-info-value{
  color:red;
}
.abc{
  height:1000px;
  background-color: #ddd;
}
</style>
