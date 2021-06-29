<template>
<div>
  <div class="header">
    <div class="header-left" @click="toHome">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header-title">
      城市选择
    </div>
    <div class="header-right" ></div>
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
  },
  methods:{
    toHome(){
      this.$router.push('/');
    },
    // toTerr(){
    //   this.$router.push('/terr');
    // },
    // toOffs(){
    //   this.$router.push('/offs');
    // }
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
  .header-title{
    flex:1;
    text-align:center;
  }
  .header-right{
    width: .8rem;
  }
</style>

