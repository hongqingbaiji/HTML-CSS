<template>
  <div class="head-pendant">
    <h3>头像挂件奖励</h3>
    <p>PK获胜方获得30天挂件奖励；落败一方获得7天挂件奖励；阵营票数相同，各获得20天挂件奖励
奖励将在活动结束的3个工作日内发放！</p>
    <div class="guajian">
      <img src="~@/assets/img/headPendant/guajian.webp">
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HeadPendant',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .head-pendant{
    width: 814px;
    height: 214px;
    background: url('~@/assets/img/headPendant/headbgc.png') no-repeat;
    background-size: 100%;
    margin: 0 auto;
  }
  .head-pendant h3{
    padding-top: 15px;
  }
  .head-pendant p{
    font-size: 12px;
    padding: 30px 130px;
  }
  .head-pendant .guajian img{
    width: 60px;
    height: 60px;
  }
</style>

