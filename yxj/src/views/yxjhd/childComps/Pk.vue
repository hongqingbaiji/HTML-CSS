<template>
  <div class="pk">
    <div class="pkImg">
      <div class="team2" v-show="team==2">
        <div class="me_left">我方</div>
        <div class="you_right">对方</div>  
      </div>
      <div class="team1" v-show="team==1">
        <div class="you_left">对方</div>  
        <div class="me_right">我方</div>

      </div>
    </div>
    <div class="progress">
      <span class="yxdProgress" :style="{width:yxdWidth(yxdNum,tydNum)+'%'}"></span>
      <span class="yxdNum" >{{team2Count}}</span>
      <span class="tydNum">{{team1Count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'Pk',
  props:{
    team1Count:Number,
    team2Count:Number,
    team:Number
  },
  data(){
    return {
      yxdNum:this.team2Count,
      tydNum:this.team1Count,
      team1:this.team
    }
  },
  methods:{
    yxdWidth(yxdNum,tydNum){
      this.yxdNum = this.team2Count;
      this.tydNum = this.team1Count;
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
    position: relative;
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
  .me_left,.me_right,.you_left,.you_right{
    position: absolute;
    top: 10px;
    width: 60px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    color:red;
    font-weight: 700;
  }
  .me_left{
    left: 0;
    background: url('~@/assets/img/pk/me_left.png') center center /100% no-repeat;
  }
  .you_right{
    right: 0;
    background: url('~@/assets/img/pk/you_right.png') center center /100% no-repeat;
  }
  .me_right{
    right: 0;
    background: url('~@/assets/img/pk/me_right.png') center center /100% no-repeat;
  }
  .you_left{
    left: 0;
    background: url('~@/assets/img/pk/you_left.png') center center /100% no-repeat;
  }

</style>