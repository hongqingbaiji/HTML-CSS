<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  border-bottom:8px solid #eee;
}
.recommend-item{
  flex:1;
  margin-bottom: 3px;
}

.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>