<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-goods-param :goods-param="goodsParam"></detail-goods-param>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
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

import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';

import {getDetail,Goods,Shop,GoodsParam} from 'network/detail';

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,

    Scroll,
    GoodsList
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
      goodsList:[],
    }
  },
  created(){
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      console.log(res);
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
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh();
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
  bottom:49px;
  left:0;
  right:0;
  overflow:hidden;
  background-color: #fff;
}


</style>
