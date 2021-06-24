<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in page" :key="item.id" class="icon-swiper">
        <div class="icon-item" v-for="page in item" :key="page.id">
          <img :src="page.imgUrl">
          <p>{{page.text}}</p>
        </div>
      </swiper-slide>

      <!-- 小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>



  </div>
</template>

<script>
export default {
  name: 'Icon',
  components: {},
  data() {
    return {
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            //如果小圆点没有显示，那需要把swiper插件的版本降低一些
          },
          loop:true //开启循环播放
        },
      iconList:[{
        id:'01',
        imgUrl: require('@/assets/image/icon/icon1.png'),
        text:'故宫'
      },{
        id:'02',
        imgUrl:require('@/assets/image/icon/icon2.png'),
        text:'八达岭长城真的很长哦'
      },{
        id:'03',
        imgUrl:require('@/assets/image/icon/icon3.png'),
        text:'文化古迹'
      },{
        id:'04',
        imgUrl:require('@/assets/image/icon/icon4.png'),
        text:'天坛公园'
      },{
        id:'05',
        imgUrl: require('@/assets/image/icon/icon1.png'),
        text:'故宫'
      },{
        id:'06',
        imgUrl:require('@/assets/image/icon/icon2.png'),
        text:'八达岭长城'
      },{
        id:'07',
        imgUrl:require('@/assets/image/icon/icon3.png'),
        text:'文化古迹'
      },{
        id:'08',
        imgUrl:require('@/assets/image/icon/icon4.png'),
        text:'天坛公园'
      },{
        id:'09',
        imgUrl:require('@/assets/image/icon/icon3.png'),
        text:'文化古迹'
      },{
        id:'10',
        imgUrl:require('@/assets/image/icon/icon4.png'),
        text:'天坛公园'
      }

      ]
    }
  },
  computed: {
    page(){
      let pages = [];
      this.iconList.forEach((item,index)=>{
        let idx = Math.floor(index/8);
        if(!pages[idx]){
          pages[idx] = [];
        }
        pages[idx].push(item)
      });
      return pages;
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl';
  .icons{
    width: 100%;
    background-color: #fff;
  }
  .icon-swiper{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-bottom: .6rem;
  }
  .icon-item{
    width: 25%;
    margin: .2rem 0;
  }
  .icon-item img{
    width: 1.1rem;
    height: 1.1rem;
  }
  .icon-item p{
    font-size: .28rem;
    color:#212121;
    whiteSpace();
  }


</style>
