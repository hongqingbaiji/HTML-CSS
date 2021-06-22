<template>
  <div class="header-swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl">
      </swiper-slide>

      <!-- 小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>



<script>
  export default {
    name:'HeaderSwiper',
    data() {
      return {
        swiperList:[
          {
            id:'01',
            imgUrl: require('@/assets/image/swiper/swiper1.jpg')
          },{
            id:'02',
            imgUrl: require('@/assets/image/swiper/swiper2.jpg')
          },{
            id:'03',
            imgUrl: require('@/assets/image/swiper/swiper3.jpg')
          },{
            id:'04',
            imgUrl: require('@/assets/image/swiper/swiper4.jpg')
          }
        ],

        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            //如果小圆点没有显示，那需要把swiper插件的版本降低一些
          },
          loop:true //开启循环播放
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
  /* 优化样式，防止图片加载慢导致下方的内容出现掉块现象 */
  /* .header-swiper{
    background: #ccc;
    height: 0;
    padding-bottom: 26.67%;
    /* 为什么是26.67% ？ 
    因为宽是375px，100%是375，高需要100px的话,计算后就是26.67% */
  /* } */ 
  .header-swiper img{
    width: 100%;
    height: 2rem;
  }

  /* 样式穿透 修改小圆点的颜色*/
  .header-swiper >>> .swiper-pagination-bullet-active{
    background:#fff;
  }
</style>
