// 制作累计奖励
<template>
  <div class="create-cum">
    <div class="cumtitle">
      <h4>制作累计奖励（汤圆/元宵）</h4>
      <div class="cum" v-for="(item,index) in awardList" :key="index">
        <div class="cum-left">
          <img :src="item.image" >
          <span>{{item.name}}</span>
        </div>
        <div class="cum-right">
          <span>{{item.progress}}/{{item.total}}</span>
        </div>
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

    }
  }
}
</script>

<style scoped>
.create-cum{
  width: 814px;
  height: 441px;
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
}
.cum{
  display: flex;
  justify-content: space-around;
}
.cum-left img{
  width: 51px;
  margin-right: 15px;
  vertical-align: middle;
}
</style>
