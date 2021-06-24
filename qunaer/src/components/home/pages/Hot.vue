<template>
  <div class="hot">
    <div class="hot-header">
      <span class>
        <i class="iconfont" style="color:red;font-size:.44rem">&#xe6e7;</i>本周热门榜单
      </span>
      <span class="span-right">全部榜单
        <i class="iconfont">&#xe687;</i>
      </span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotList" :key="item.id">
        <div class="hot-item-div">
          <img :src="item.imgUrl">
          <p class="hot-title">{{item.title}}</p>
          <p class="hot-price"><span>{{getFinalPrice(item.price)}}</span> 起</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Hot',
  data() {
    return {
      swiperOptions: {
        scrollbar: {
          el: '.swiper-scrollbar',
        },  
      },
      hotList:[{
        id:'01',
        imgUrl:require('@/assets/image/hot/hot1.jpg'),
        topUrl:require('@/assets/image/hot/top1.png'),
        title:'故宫',
        price:57
      },{
        id:'02',
        imgUrl:require('@/assets/image/hot/hot2.jpg'),
        topUrl:require('@/assets/image/hot/top2.png'),
        title:'颐和园',
        price:28.1
      },{
        id:'03',
        imgUrl:require('@/assets/image/hot/hot3.jpg'),
        topUrl:require('@/assets/image/hot/top3.png'),
        title:'八达岭长城',
        price:39.5
      },{
        id:'04',
        imgUrl:require('@/assets/image/hot/hot4.jpg'),
        title:'天坛公园',
        price:16.2
      },{
        id:'05',
        imgUrl:require('@/assets/image/hot/hot5.jpg'),
        title:'恭王府',
        price:42.5
      },{
        id:'06',
        imgUrl:require('@/assets/image/hot/hot1.jpg'),
        title:'北京野生动物园大熊猫馆',
        price:145
      },{
        id:'07',
        imgUrl:require('@/assets/image/hot/hot2.jpg'),
        title:'圆明园',
        price:10
      },{
        id:'08',
        imgUrl:require('@/assets/image/hot/hot3.jpg'),
        title:'北京动物园',
        price:16.6
      },{
        id:'09',
        imgUrl:require('@/assets/image/hot/hot4.jpg'),
        title:'鸟巢',
        price:38
      },{
        id:'10',
        imgUrl:require('@/assets/image/hot/hot5.jpg'),
        title:'北京欢乐谷',
        price:299
      }

      ]
    };
  },
  methods: {
    getFinalPrice(price){
      return '￥'+price.toFixed(1);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl';

.hot{
  width: 100%;
  background-color #fff;
}
.hot-header{
  display: flex;
  justify-content: space-between;
  font-size: .36rem;
  padding: .2rem;
  margin-top: .2rem;
}
.span-right{
  font-size: .28rem;
  padding-top:.1rem;
  color:#616161;
}

.hot-list{
  overflow-x: scroll;
  white-space: nowrap;
  font-size: .24rem;
  padding: 0 .1rem;
}
.hot-item{
  display: inline-block;
  text-align: center;
  padding: .06rem .1rem .3rem;
  width: 2rem;
}
.hot-item img{
  width: 2rem;
  height: 2rem;
}
.hot-title{
  padding: .1rem 0;
  whiteSpace();

}
.hot-price{
  color:#616161;
}
.hot-price span{
  color:#ff8300;
}
</style>
