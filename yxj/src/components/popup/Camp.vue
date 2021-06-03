<template>
  <div>
    <div class="camp" v-show="isChangeTeam2==0 && team1!=0">
      <h4>更换阵营</h4>
      <span style="font-size:0">{{team1}}</span>
      <p>活动期间，只有一次更换阵营的机会，更换后，个人已做元宵汤圆个数也会随之更换到对应阵营哦，请谨慎考虑</p>
      <span v-show="team1==1">是否更换到：元宵队</span>
      <span v-show="team1==2">是否更换到：汤圆队</span>
      <div class="yxorty">
        <div class="yxd" v-show="team1==2">
          <img src="~@/assets/img/popup/changeyx2.png" >
          <img v-if="showMove" src="~@/assets/img/popup/changety.png" @mouseover="mouseover" >
          <img v-else src="~@/assets/img/popup/changety2.png" @mouseleave="mouseleave">
          <span class="tycurrent"></span>
        </div>
        <div class="tyd" v-show="team1==1">
          <img v-if="showMove" src="~@/assets/img/popup/changeyx.png" @mouseover="mouseover">
          <img v-else src="~@/assets/img/popup/changeyx2.png" @mouseleave="mouseleave">
          <img src="~@/assets/img/popup/changety2.png">
          <span class="yxcurrent"></span>
        </div>
      </div>
      <div class="campbtn">
        <button class="close" @click="closeClick">取消</button>
        <button class="submit" @click="submitClick">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Camp',
  props:{
    team1:Number,
    isChangeTeam1:Number
  },
  components: {},
  data() {
    return {
      showMove:true,
      team2:this.team1,
      isChangeTeam2:this.isChangeTeam1,
      isCamp1:true
    }
  },
  methods:{
    mouseover(){
      this.showMove = false;
    },
    mouseleave(){
      this.showMove = true;
    },
    closeClick(){
      this.isCamp1 = false;
      this.$emit('isCampChange',this.isCamp1);
    },
    submitClick(){
      this.isCamp1 = false;
      this.team2 = this.team1;
      this.$emit('isCampChange',this.isCamp1);
      this.isChangeTeam2 = 1;
      this.$emit('ChangeTeam1',this.isChangeTeam2);
      if(this.team2 == 1){
        this.team2 = 2;
      }else{
        this.team2 = 1
      }
      this.$emit('teamChange1',this.team2);
    }
  }
}
</script>

<style scoped>
  .camp{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,30%);
    width: 310px;
    height: 356px;
    background-color: #fff;
    color: #333;
    font-size: 12px;
    z-index:10;
  }
  .camp h4{
    font-size:18px;
    margin-top: 15px;

  }
  .camp p{
    width: 245px;
    text-align: left;
    line-height: 16px;
    margin: 5px auto 10px;
  }
  .camp span {
    color:#f66f0c;
  }
  .yxorty{
    width: 100%;
    height: 162px;
  }
  .yxd, .tyd{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    cursor: pointer;

  }
  .yxd img ,.tyd img{
    width: 113px;
    height: 162px;
  }
  .tycurrent, .yxcurrent{
    position: absolute;
    top: 0;
    width: 42px;
    height: 19px;
    background: url('~@/assets/img/popup/currentbtn.png') center center /100% no-repeat;
  }
  .tycurrent{
    left: 25%;
    transform: translate(-30%,50%);
  }
  .yxcurrent{
    right: 25%;
    transform: translate(30%,50%);
  }
  .campbtn{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-top: 1px solid #eee;
  }
  .campbtn button{
    font-size: 18px;
    border: 0;
    background-color: #fff;
    cursor: pointer;
  }
  .campbtn .close{
    width: 50%;
    color:#666;
    border-right: 1px solid #eee;
  }
  .submit{
    width: 50%;
    color:#f66f0c;
  }
</style>
