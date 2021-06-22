<template>
  <div class="locations border-top">
    <div class="location-item border-right">
      <span class="iconfont">&#xe649;</span>
      <span>定位失败</span>
    </div>
    <div class="location-item">
      <span class="iconfont">&#xe689;</span>
      <span>玩水季</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .locations{
    position: relative;
    background-color: #fff;
    display: flex;
    justify-content:space-around;
    text-align: center;
  }
  .location-item {
    flex:1;
    font-size: .36rem;
    line-height: 1rem;
  }
</style>
