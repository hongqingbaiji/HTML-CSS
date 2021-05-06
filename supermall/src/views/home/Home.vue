<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" class="home-banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>

    <div class="abc">123</div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList';

import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommendView';
import HomeFeatureView from './childComps/HomeFeatureView';

import {getHomeMultidata,getHomeGoods} from 'network/home';

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page: 0, list:[]},
        'new':{page: 0, list:[]},
        'sell':{page: 0, list:[]},
      }
    }
  },
  created(){
    // 1.请求多个数据
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }) 
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style>
/* #home{
  padding-top:44px;
} */
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.home-banners{
  margin-top: 44px;
}

.tab-control{
  position: sticky;
  top:44px;
  z-index: 9;
  margin-bottom: 5px;
}


.abc{
  height: 1000px;
  background-color: #ccc;
}
</style>