<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper';

export default {
  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      // 只需要发送一张图是否加载完成即可
      if(!this.isLoad){
        this.$emit('swiperImageLoad');
        this.isLoad = true;
      }
  
    }
  }
}
</script>

<style>

</style>