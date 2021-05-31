// 制作累计奖励
<template>
  <div class="create-cum">
    <div class="cumtitle">
      <h4>制作累计奖励（汤圆/元宵）</h4>
    </div>
    <div class="cum" v-for="(item,index) in awardList" :key="index">
        <div class="cum-left">
          <img :src="item.image">
          <span>{{item.name}}</span>
        </div>
        <div class="cum-right">
          <span>{{item.progress}}/{{item.total}}</span>
          <button v-if="item.status==0" class="btnstate0">{{btnstatus[item.status]}}</button>
          <button v-else-if="item.status==1" class="btnstate1">{{btnstatus[item.status]}}</button>
          <button v-else class="btnstate2">{{btnstatus[item.status]}}</button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CreateCum',
  props:{
    awardList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {},
  data() {
    return {
      btnstatus:['未达成','已达成','已领取','已领光']
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.create-cum{
  width: 814px;
  height: 496px;
  background: rgba(61,23,147,0.5);
  border-radius: 6px;
  margin: 30px auto;
}
.cumtitle {
  width: 814px;
  height: 46px;
  background-color: #753799;
  border-radius: 5px 5px 0 0;
  line-height: 46px;
  margin-bottom: 20px;
}
.cum{
  display: flex;
  justify-content: space-between;
  padding:2px 130px; 
  line-height: 68px;
}
.cum-left img{
  width: 51px;
  margin-right: 20px;
  vertical-align: middle;
}

.btnstate0,.benstate1,.benstate2{
  width: 76px;
  height: 33px;
  text-align: center;
  line-height: 33px;
  border: 0;
  color:#fff;
  font-size: 14px;
}
.btnstate0{
  background: url('~@/assets/img/createcum/btnstate0.png') no-repeat;
  background-size: 100%;
}
.btnstate1{
  background: url('~@/assets/img/createcum/btnstate1.png') no-repeat;
  background-size: 100%;
}
.btnstate2{
  background: url('~@/assets/img/createcum/btnstate2.png') no-repeat;
  background-size: 100%;
}

.cum-right span{
  margin-right:20px;
}
.cum:last-child{
  position: relative;
  padding: 10px 30px;
  height: 100px;
  margin: 20px 100px;
}

.cum:last-child::after{
  content: "奖励将于6月6日 20:00 开启兑换";
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 14px;
  color: rgb(244,222,255);
  text-align: center;
  line-height: 29px;
  width:100%;
  height: 105px;
  background: url('~@/assets/img/createcum/cumbgc.png') center center /100% no-repeat;
}
</style>
