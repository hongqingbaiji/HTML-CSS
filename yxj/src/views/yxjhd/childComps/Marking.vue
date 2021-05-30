<template>
  <div class="marking">
    <div class="desk">
      <div class="activeMsg" v-if="activeState==0">活动未开始</div>
      <div class="activity" v-else-if="activeState==1">
        <div class="dough">x5</div>
        <div v-if="!isActive" class="startmark" @mouseover="mouseOver"></div>
        <div v-else class="startmarking" @mouseleave="mouseLeave"></div>
        <div class="camp">更换阵容</div>
      </div>
      <div class="activeMsg" v-else>活动已结束</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Marking',
  props:{
    activeState:Number
  },
  data() {
    return {
      msg:'hello',
      isActive:false
    }
  },
  methods:{
    mouseOver(){
      this.isActive = true;
    },
    mouseLeave(){
      this.isActive = false;
    }
  }
}
</script>

<style scoped>
.marking{
  width: 100%;
  height: 370px;
  padding-bottom: 5px;
  background-color: #6842a5;
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
