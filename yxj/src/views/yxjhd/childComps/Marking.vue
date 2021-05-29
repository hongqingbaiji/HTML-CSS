<template>
  <div class="marking">
    <div class="desk">
      <div class="activeMsg" v-if="activeState==0">活动未开始</div>
      <div class="activity" v-else-if="activeState==1">
        <div class="dough"></div>
        <div class="startmark">开始制作</div>
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
      msg:'hello'
    }
  }
}
</script>

<style scoped>
.marking{
  width: 100%;
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
  bottom:25px;
  left: 0;
  right: 0;
  display: flex;
}

.dough {
  position: absolute;
  
  width: 222px;
  height: 107px;
  background: url('~@/assets/img/dough.png') no-repeat;
  background-size: 100% 100%;
}
</style>
