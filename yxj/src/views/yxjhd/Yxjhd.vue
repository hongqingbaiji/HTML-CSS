<template>
  <div id="yxjhd">
    <div class="topImg">
      <div class="barrage" :notice="notice" 
           v-for="(item,index) in notice" :key="index">{{ item }}</div>
    </div>
    <mark></mark>
  </div>
</template>

<script>
import Mark from './childComps/Mark';

import { getActiveUser } from 'network/yxjhd'

export default {
  name: 'Yxjhd',
  components: {
    Mark
  },
  data() {
    return {
      activeUser:[],
      notice:['厨神【巴拉巴拉小魔仙】制作了元宵']
    }

  },
  created(){
    // 请求数据
    this.getActiveUser();
  },
  methods:{
    getActiveUser(){
        getActiveUser().then(res=>{
        this.activeUser = res.data.active_user;
        this.notice = res.data.notice;
      }) 
    },
  }
}
</script>

<style scoped>
  #yxjhd{
    height: 3000px;
    font-size: 16px;
    color:#fff;
    background-color: #58309B;
    text-align: center;
  }
  .topImg{
    position: relative;
    width: 100%;
    height: 959px;
    background: url('~@/assets/img/top.png') center no-repeat;
  }
  .topImg .barrage{
    position: absolute;
    bottom: 30px;
    left: 50%;
    height: 30px;
    line-height: 30px;
    width: 400px;
    margin-left:-200px;
  }

</style>
