<template>
  <div class="like">
    <div class="like-top">
      <i class="iconfont">&#xe622;</i>
      <span> 猜你喜欢</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Like',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .like{
    margin-top: .2rem;
    padding: 0 .2rem;
    background-color: #fff;
  } 
  .like-top{
    line-height: .5rem;

  }
  .like-top i {
    color:red;
    font-size: .40rem;
  }
  .like-top span{
    font-size: .36rem;
  }
</style>
