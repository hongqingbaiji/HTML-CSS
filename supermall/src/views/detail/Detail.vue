<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-goods-param ref="params" :goods-param="goodsParam"></detail-goods-param>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends" class="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <!-- <toast :message="message" :isShow="isShow"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailGoodsParam from './childComps/DetailGoodsParam';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailBottomBar from './childComps/DetailBottomBar';

import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
// import Toast from 'components/common/toast/Toast';

import { debounce } from 'common/utils';
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail';
import {itemListenerMixin,backTopMixin} from 'common/mixin';
// import { mapActions } from 'vuex';

export default {
  name: 'Detail',
  mixins:[itemListenerMixin,backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,
    DetailBottomBar,
    // Toast,

    Scroll,
    GoodsList,

  },
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParam:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,

      // message:'',
      // isShow:false
    }
  },
  created(){
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      // console.log(res);
      // 获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      // 获取商店信息
      this.shop = new Shop(data.shopInfo);
      // 获取商品详细信息
      this.detailInfo = data.detailInfo;
      // 获取商品参数信息
      this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule);
      // 获取评论信息，需要先判断是否有评论
      if(data.rate.list){
        this.commentInfo = data.rate.list[0];
      }
      // // 获取商品列表
      // this.goodsList = data.list;
    });

    // 3.请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
	    this.recommends = res.data.list
		})

    // 4. 给getThemeTopY赋值 (防抖)
    this.getThemeTopY = debounce(()=>{
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);// 最大值
      // console.log(this.themeTopYs);
    },100);

  },
  mounted(){

  },
  destroyed(){
    this.$bus.$off('itemImgLoad',this.itemImgListener);
  },
  methods:{
    // ...mapActions(['addToCart']),
    imageLoad(){
      // this.$refs.scroll.refresh();
      this.refresh();
      this.getThemeTopY();
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200);
    },
    contentScroll(position){
      // console.log(position);
      // 判断backTop是否显示
      this.isShowBackTop = (-position.y) > 800;
      // 获取y值
      const positionY = -position.y;
      // 将positionY 和主题中值进行对比
      let length = this.themeTopYs.length;
      for(let i = 0; i < length-1;i++){
        // 普通做法
        // if(this.currentIndex !== i && ((i < length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || 
        //     (i === length-1 && positionY >= this.themeTopYs[i]))){
        //   this.currentIndex = i;
        //   this.$refs.nav.currentIndex = this.currentIndex;
        // }

        // Hack方法，数组里多加一个最大值，循环里面加上 length-1，少循环一个值，这样就不需要考虑 i+1会溢出了
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    // 添加到购物车
    addToCart(){
      // 1.先获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0],
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2. 将商品信息添加到购物车里展示
      // 这是使用mutations时的添加方法
      // this.$store.commit('addCart',product);
      
      // 这是使用actions时添加方法
      this.$store.dispatch('addToCart',product).then(res => {
        // this.isShow=true;
        // this.message = res;

        // setTimeout(()=>{
        //   this.isShow = false;
        //   this.message = '';
        // },2000)
        // console.log(this.$toast);
        this.$toast.show(res, 2000);

      });
      // this.addToCart(product).then(res => {
      //   console.log(res);
      // })
    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index:11;
  background-color: #fff;
  height: 100vh;
}
.content{
  position:absolute;
  top:44px;
  bottom:58px;
  left:0;
  right:0;
  overflow:hidden;
  background-color: #fff;
}
.recommend{
  border-bottom: 5px solid #fff;
}

</style>
