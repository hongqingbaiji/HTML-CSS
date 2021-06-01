<template>
<div>
  <div class="marking" v-if="activeState==1">
    <div class="desk">
      <div class="activity">
        <div class="dough">x{{pasteNum}}</div>
        <div v-if="!isActive" class="startmark" @mouseover="mouseOver"></div>
        <div v-else class="startmarking" 
             @mouseleave="mouseLeave"
             @click="markClick"
             ></div>
        <div class="camp">更换阵营</div>
      </div>
    </div>
  </div>
  <div class="marking1" v-else>
    <div class="desk">
      <div class="activeMsg" v-show="activeState==0">活动未开始</div>
      <div class="activeMsg" v-show="activeState==2">活动已结束</div>
    </div>
  </div>
  <!-- <popup :message="message" :isShow="isShow"></popup> -->
</div>
  
</template>

<script>

// import Popup from 'components/popup/Popup';

export default {
  name: 'Marking',
  props:{
      status:Number,
      activeState: Number,
      isChangeTeam:Number,
      team:Number,
      pasteNum:Number
  },
  components:{
    // Popup
  },
  data() {
    return {
      isActive:false,
      pasteNum1:this.pasteNum,

      // message:'',
      // isShow:false
    }
  },
  methods:{
    mouseOver(){
      this.isActive = true;
    },
    mouseLeave(){
      this.isActive = false;
    },
    markClick(){
      // 先判断是否登录
      if(this.status === -1000){
        alert('你没有登录');
      }else{
        // 判断是否加入了阵营
        if(this.team === 0){
          this.$popup.dispatch('markClick').then(res => {
            this.$popup.show(res);
          })
        }
        this.pasteNum1 = this.pasteNum;
        this.pasteNum1 -= 5;
        this.$emit('pasteNumChange',this.pasteNum1);
      }

    }
  }
}
</script>

<style scoped>
.marking,.marking1{
  width: 100%;
  padding-bottom: 5px;
  background-color: #6842a5;
}
.marking{
  height: 370px;
}
.marking1{
  height: 225px;
}

.desk{
  position: relative;
  width: 836px;
  height: 220px;
  margin: 0 auto;
  background: url('~@/assets/img/desk.png') top center no-repeat;
  background-size: 100%;
}

.activeMsg {
  position:absolute;
  bottom:25px;
  left: 0;
  right: 0;
  font-size: 20px;
}

.activity{
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
}

.dough, .startmark, .startmarking, .camp{
  position: absolute;
  width: 222px;
  height: 107px;
  cursor: pointer;
}

.dough,.camp{
  color:#AB6D20;
  font-size: 25px;
  padding-top: 20px;
  font-weight: 700;
}

.dough {
  top:35px;
  left: 20px;
  background: url('~@/assets/img/dough.png') no-repeat;
  background-size: 100% 100%;
  padding-left: 45px;
}

.startmark{
  top: 0;
  left: 290px;
  background: url('~@/assets/img/startmark.png');
  background-size: 100% 100%;
}

.startmarking{
  top: 0;
  left: 290px;
  background: url('~@/assets/img/startmarking.png');
  background-size: 100% 100%;
}

.camp{
  top: 35px;
  left: 560px;
  background: url('~@/assets/img/camp.png');
  background-size: 100% 100%;
  text-align: center;
}
</style>
