<template>
  <div class="home">

 -->
    <home-hot></home-hot>
    123
  </div>
</template>

<script>
import HomeHeader from './pages/Header';
import HomeSwiper from './pages/Swiper';
import HomeIcon from './pages/Icon';
import HomeLocation from './pages/Location';
import HomeHot from './pages/Hot';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeHot
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.home{
  background-color: #f5f5f5;
}
</style>
