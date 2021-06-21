<template>
  <div class="header-swiper">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img src="@/assets/image/1.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/2.jpg">
      </swiper-slide>
      <!-- 小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true
        }
      }
    },
    // computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.$swiper
    //   }
    // },
    // mounted() {
    //   console.log('Current Swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    // }
  }
</script>

<style scoped>
  .header-swiper{
    width: 100%;
    height: 2rem;
  }
  .header-swiper img{
    width: 100%;
    height: 2rem;
  }
</style>
