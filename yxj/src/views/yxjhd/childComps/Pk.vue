<template>
  <div class="pk">
    <div class="pkImg"></div>
    <div class="progress">
      <span class="yxdProgress" :style="{width:yxdWidth(yxdNum,tydNum)+'%'}"></span>
      <span class="yxdNum">{{yxdNum}}</span>
      <span class="tydNum">{{tydNum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'Pk',
  data(){
    return {
      yxdNum:70000,
      tydNum:100000
    }
  },
  methods:{
    yxdWidth(yxdNum,tydNum){
      const total = this.yxdNum +this.tydNum;
      const percentage = (this.yxdNum / total)*100;
      return percentage
    }
  }
}
</script>

<style>
  .pk{
    width: 540px;
    margin: 20px auto; 
  }
  .pkImg{
    width: 100%;
    height: 210px;
    background: url('~@/assets/img/pk/pk.png') no-repeat;
    background-size: 100% 100%;
  }
  .progress{
    position: relative;
    width: 100%;
    height: 10px;
    margin-top: 30px;
    border-radius: 5px;
    background: url('~@/assets/img/pk/tyd.png');
  }
  .yxdProgress {
    position: absolute;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100px;
    height: 10px;
    background: url('~@/assets/img/pk/yxd.png');
  }
  .yxdProgress::after {
    content: '';
    position: absolute;
    margin:-6px -3px 0 0;
    right: 0;
    z-index:1;
    width: 13px;
    height: 20px;
    background: url('~@/assets/img/pk/light.png') no-repeat;
    background-size: 100% 100%;
    overflow: auto;
  }
  .yxdNum {
    position: absolute;
    left: 5px;
    top: 20px;
  }
  .tydNum {
    position: absolute;
    right: 5px;
    top: 20px;
  }

</style>