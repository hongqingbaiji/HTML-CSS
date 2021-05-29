<template>
  <div>
    <div class="topImg">
      <div class="barrage">厨神【巴拉巴拉小魔仙】制作了元宵</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopImg',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .topImg {
    position: relative;
    width: 100%;
    height: 959px;
    background: url('~@/assets/img/top.png') center no-repeat;
  }
  .topImg .barrage {
    position: absolute;
    bottom: 30px;
    left: 50%;
    height: 30px;
    line-height: 30px;
    width: 400px;
    margin-left:-200px;
  }
</style>
