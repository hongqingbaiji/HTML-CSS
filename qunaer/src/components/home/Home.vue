<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './pages/Header';
import HomeSwiper from './pages/Swiper';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
