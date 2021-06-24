<template>
  <div class="home">

    <home-header></home-header>
    <home-swiper></home-swiper>
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

    }
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
