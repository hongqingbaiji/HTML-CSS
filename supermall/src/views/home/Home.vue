<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <div class="abc">123</div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';

import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommendView';
import HomeFeatureView from './childComps/HomeFeatureView';

import {getHomeMultidata} from 'network/home';

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    // 1.请求多个数据
    getHomeMultidata().then(res=>{
      // console.log(res.data.banner.list);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }) 
  }
}
</script>

<style>
#home{
  padding-top:44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.abc{
  height: 1000px;
  background-color: #ccc;
}
.tab-control{
  position: sticky;
  top:44px;
}

</style>