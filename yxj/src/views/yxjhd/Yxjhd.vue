<template>
  <div id="yxjhd">
    <top-img></top-img>
    <marking :activeState="activeState"></marking>
    <pk></pk>
    <rank-list></rank-list>
    <head-pendant></head-pendant>
    <create-cum :award-list="awardList"></create-cum>
  </div>
</template>

<script>
import TopImg from './childComps/TopImg';
import Marking from './childComps/Marking';
import Pk from './childComps/Pk';
import RankList from './childComps/RankList';
import HeadPendant from './childComps/HeadPendant';
import CreateCum from './childComps/CreateCum'

import { getActiveUser,getAwardList } from 'network/yxjhd'

export default {
  name: 'Yxjhd',
  components: {
    TopImg,
    Marking,
    Pk,
    RankList,
    HeadPendant,
    CreateCum
  },
  data() {
    return {
      activeUser:[],
      notice:[],
      activeState: 1,
      awardList:[]
    }

  },
  created(){
    // 请求数据
    // this.getActiveUser();

    //获取累计制作奖励列表接口
    getAwardList().then(res => {
      this.awardList = res.data;
    })
  },
  methods:{
    getActiveUser(){
        getActiveUser().then(res=>{
        this.activeUser = res.data.active_user;
        this.notice = res.data.notice;
      }) 
    }
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
</style>

