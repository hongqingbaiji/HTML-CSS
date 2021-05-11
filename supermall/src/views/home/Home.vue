<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" 
                   :titles="['流行','新款','精选']" 
                   @tabClick="tabClick"
                   ref="tabControl1" 
                   v-show="isShowTabControl"></tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" class="home-banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :titles="['流行','新款','精选']" 
                   @tabClick="tabClick"
                   ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- .native 监听组件的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';

import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommendView';
import HomeFeatureView from './childComps/HomeFeatureView';

import {getHomeMultidata,getHomeGoods} from 'network/home';
import {itemListenerMixin,backTopMixin} from 'common/mixin';

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins:[itemListenerMixin,backTopMixin],
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page: 0, list:[]},
        'new':{page: 0, list:[]},
        'sell':{page: 0, list:[]},
      },
      currentType:'pop',
      tabOffsetTop:0,
      isShowTabControl:false,
      saveY:0,
    }
  },
  // 声明周期
  activated(){
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.saveY,0);
  },

  deactivated(){
    //当离开首页时， 1.先保存一下Y值
    this.saveY = this.$refs.scroll.getScrollY();
    // 2.取消全局事件的监听
    this.$bus.$off('itemImgLoad',this.itemImgListener);
  },
  created(){
    // 1.请求多个数据
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },

  mounted(){
    // 使用混入后就不需要这些东西了
    // // 3. 监听item中图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 200);
    // // 对监听的事件进行保存
    // this.itemImgListener = ()=>{
    //   refresh();
    // };
    // this.$bus.$on('itemImageLoad',this.itemImgListener);
  },

  methods:{
    // 事件监听的方法
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break        
        case 2:
          this.currentType = 'sell';
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
    contentScroll(position){
      // console.log(position);
      // 判断backTop是否显示
      this.isShowBackTop = (-position.y) > 800;
      // 判断tabControl是否吸顶
      this.isShowTabControl = (-position.y) > this.tabOffsetTop;

    },
    loadMore(){
      this.getHomeGoods(this.currentType);
      // 重新计算高度，防止下拉图片显示不全bug
      this.$refs.scroll.refresh();
    },
    swiperImageLoad(){
      // 获取tabControl 的 offsetTop
      // 所有组件都有一个属性$el，用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // 网络请求的方法
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

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      })
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  }
}
</script>

<style scoped>
#home{
  /* padding-top:44px; */
  /* vh 是视口高度 viewport height*/
  height: 100vh;
  position:relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  /*之前 使用的是浏览器原生的滚动，是网页全局的滚动，现在使用了better-scroll,不需要固定定位了
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.tab-control{
  position: relative;
  z-index:9;
}

.content{
  /* 第一种方法：动态计算高度 */
  /* margin-top:44px;
  height: calc( 100% - 93px ); */

  /* 第二种方法：使用定位*/
  position:absolute;
  top:44px;
  bottom:49px;
  left:0;
  right:0;
  overflow:hidden;
}


</style>