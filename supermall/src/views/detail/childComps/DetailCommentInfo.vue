<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <span class="header-left">用户评价</span>
      <span class="header-right">更多</span>
    </div>
    <div class="comment-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="info-date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils';

export default {
  name: 'DetailCommentInfo',
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate:function(value){
      let date = new Date(value*1000);
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .comment-info{
    margin: 5px 15px 0;
    border-bottom: 5px solid #f2f5f8;
    font-size: 14px;
  }
  .info-header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
  }
  .header-left{
    font-size:16px;
  }
  .header-right{
    padding-right: 10px;
  }
  .comment-user{
    height: 60px;
    padding:10px 0;
  }
  .comment-user img{
    width: 42px;
    height: 42px;
    vertical-align:middle;
    border-radius: 50%;
    margin-right: 10px;
  }
  .info-detail{
    padding: 0 5px 15px;
  }
  .info-other{
    margin: 10px 0;
    color:#999;
    font-size: 12px;
  }
  .info-date{
    margin-right: 10px;
  }
  .info-imgs img{
    width:70px;
    height: 70px;
    margin-right: 5px;
  }

</style>
