<template>
  <div id="yxjhd">
    <div class="topImg">
      <div class="barrage" :notice="notice" 
           v-for="(item,index) in notice" 
           v-show="showBarrage" >{{ item }}</div>
    </div>
  </div>
</template>

<script>
import { getActiveUser } from 'network/yxjhd'

export default {
  name: 'Yxjhd',
  components: {},
  data() {
    return {
      activeUser:[],
      notice:['厨神【巴拉巴拉小魔仙】制作了元宵',
      '厨神【阿娜古丽克】制作了元宵',
      '厨神【撒旦法仍】制作了元宵',
      '厨神【火荣贵热女生】制作了元宵',
      '厨神【今天很热】制作了元宵',
      '厨神【无法答复你】制作了元宵',
      '厨神【本人接待日】制作了元宵'],
      showBarrage:true,
      currentIndex:0
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
