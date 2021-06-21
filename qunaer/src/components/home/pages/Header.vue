<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe67d;</span>
      <span> 输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      <span>北京</span>
      <span class="iconfont">&#xe688;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">

    /*
     * 使用stylus 有比较严格的版本兼容问题，如果stylus和stylus-loader 的版本不兼容，
     * 则会报错，"stylus": "^0.54.8", "stylus-loader": "^3.0.2",
    */  

    @import '~@/assets/css/var.styl';
  .header{
    display: flex;
    width: 100%;
    height: .88rem;
    background: $bgColor;
    color: #fff;
    font-size: .36rem;
    line-height: .88rem;
  }
  .header-left{
    width: .4rem;
    padding:0 .2rem;
    font-weight: 700;
    text-align: center;
  }
  .header-search{
    flex:1;
    background-color: #fff;
    color:#999;
    height:  .6rem;
    margin: .13rem 0;
    border-radius: .1rem;
    line-height: .6rem;
    font-size: .28rem;
    padding-left: .2rem;
  }
  .header-right{
    font-size: .28rem;
    padding:0 .2rem;
  }
</style>
