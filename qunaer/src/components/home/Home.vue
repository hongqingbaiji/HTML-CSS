<template>
  <div class="home">

    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icon></home-icon>
    <home-location></home-location>
    <home-hot></home-hot>
    <home-like></home-like>
    <div class="abc"></div>
  </div>
</template>

<script>
import HomeHeader from './pages/Header';
import HomeSwiper from './pages/Swiper';
import HomeIcon from './pages/Icon';
import HomeLocation from './pages/Location';
import HomeHot from './pages/Hot';
import HomeLike from './pages/Like';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeHot,
    HomeLike
  },
  data() {
    return {
      swiperList:[]
    }
  },

  created(){
    axios.get("/dataHome.json")
    .then((res)=>{
      const data = res.data.data[0];
      this.swiperList = data.swiperList;
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
.home{
  background-color: #e5e5e5;
  width: 100%;
}
.abc{
  height: 3000px;
}
</style>
