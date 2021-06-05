<template>
  <div>
    <div class="daily">
      <h3>每日任务</h3>
      <p>完成任务可获取面团</p>
      <div v-for="(item,index) in daily" :key="index" class="dailyCon">
        <div class="dailyLeft">
          <h4>{{item.name}}</h4>
          <span>{{item.biref}}</span>
        </div>
        <div class="dailyRight">{{item.progress}} / {{item.max}}</div>
      </div>
      <div class="close3" @click="close3btn"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Daily',
  props:{
    daily:{
      type:Array,
      default(){
        return []
      }
    },
  },
  components: {},
  data() {
    return {
      isDaily1:true
    }
  },
  methods:{
    close3btn(){
      this.isDaily1 = false;
      this.$emit('dailyChange',this.isDaily1);
    }
  }
}
</script>

<style scoped>
  .daily{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    color:#333;
    width: 310px;
    height: 320px;
    border-radius: 8px;
    z-index: 10;
  }
  .daily h3{
    margin:15px auto 15px;
  }
  .daily p{
    font-size: 12px;
  }
  .dailyCon{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin: 15px 25px;
  }
  .dailyLeft{
    text-align: left;
  }
  .dailyLeft h4{
    padding-bottom: 5px;
  }
  .dailyLeft span{
    color:#999;
  }
  .dailyRight{
    color: #f66f0c;
  }
  .close3{
    position: absolute;
    right: 12px;
    top: 12px;
    width: 20px;
    height: 20px;
    background: url('~@/assets/img/popup/close3.png') center center /100% no-repeat;
    cursor: pointer;
  }
</style>
