<template>
<!-- ref 绑定在子组件 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name:'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    // 1. 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      //probeType 侦测实时位置，默认值是0，0和1表示不侦测，
      // 2:在手指滚动的过程中侦测， 手指离开后的惯性滚动过程中不侦测
      // 3：只要是滚动就侦测
      probeType: this.probeType,
      click:true,
      tap:true,
      pullUpLoad:this.pullUpLoad
    });
    // 2. 监听滚动的位置
    this.scroll.on('scroll', position => {
      // console.log(position);
      this.$emit('scroll',position);
    });
    // 3. 监听上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp');
    });

  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll.refresh();
    }
  }
}
</script>

<style>

</style>