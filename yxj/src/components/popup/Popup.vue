<template>
<div>
  <div class="popup1">
    <p>选择制作汤圆/元宵，默认加入该阵营过程中可切换一次阵营</p>
    <div class="selectImg">
      <img class="yxicon" src="~@/assets/img/popup/yxd.png" @click="img1Click">
      <img class="tyicon" src="~@/assets/img/popup/tyd.png" @click="img2Click">
    </div>
    <img class="isyxd" v-show="isyxd" src="~@/assets/img/popup/select.png">
    <img class="istyd" v-show="istyd" src="~@/assets/img/popup/select.png">
    <div v-if="isdisabled" class="disable"></div>
    <div v-else class="able" @click="ablebtnclick"></div>
    <div class="close1" @click="close1Click"></div>
  </div>

</div>

</template>

<script>
export default {
  name: 'Popup',
  props:{
    team1:Number,
  },
  components: {},
  data() {
    return {
      ispopup1:true,
      isdisabled:true,
      isyxd:false,
      istyd:false,
      team2:this.team1
    }
  },
  methods:{
    img1Click(){
      this.isdisabled = false;
      this.isyxd = true;
      this.istyd = false;
    },
    img2Click(){
      this.isdisabled = false;
      this.isyxd = false;
      this.istyd = true;
    },
    ablebtnclick(){
      this.ispopup1 = false;
      if(this.isyxd){
        this.team2 = 2;
      }else{
        this.team2 = 1;
      }
      this.$emit('popupChange',this.ispopup1);
      this.$emit('teamChange',this.team2);
    },
    close1Click(){
      this.ispopup1 = false;
      this.isyxd = false;
      this.istyd = false;
      this.isdisabled = true;
      this.team2 = 0;
      this.$emit('popupChange',this.ispopup1);
      this.$emit('teamChange',this.team2);
    }
  }
}
</script>

<style scoped>
.popup1 {
  position: relative;
  width: 310px;
  height: 226px;
  padding-top:52px;
  background: url('~@/assets/img/popup/popbgc.png') center center /100% no-repeat;
}
.popup1 p{
  width: 200px;
  line-height: 18px;
  font-size: 12px;
  margin:0 auto 10px;
}
.selectImg{
  display:flex;
  justify-content: space-around;
}
.selectImg img{
  width: 89px;
  height: 67px;
  cursor: pointer;
  
}
.disable,.able {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,50%);
  width: 122px;
  height: 45px;

}
.disable{
    background: url('~@/assets/img/popup/btn1.png') center center /100% no-repeat;
}
.able{
  background: url('~@/assets/img/popup/btn2.png') center center /100% no-repeat;
}

.isyxd,.istyd{
  position: absolute;
  bottom: 30px;
  width: 15px;
  height: 15px;
}
.isyxd {
  left: 60px;

}
.istyd{
  right: 60px;
}
.close1{
  position: absolute;
  right: 20px;
  top: -40px;
  width: 30px;
  height: 88px;
  cursor: pointer;
  background: url('~@/assets/img/popup/close1.png') center center /100% no-repeat;
  z-index:-1
}
</style>
