<template>
  <div id="yxjhd">
    <top-img></top-img>
    <marking :activeState="activeState"></marking>
  </div>
</template>

<script>
import TopImg from './childComps/TopImg'
import Marking from './childComps/Marking';

// import { getActiveUser } from 'network/yxjhd'

export default {
  name: 'Yxjhd',
  components: {
    TopImg,
    Marking,
    
  },
  data() {
    return {
      activeUser:[],
      notice:[],
      activeState: 1
    }

  },
  created(){
    // 请求数据
    // this.getActiveUser();
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
</style>
