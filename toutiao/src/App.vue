<template>
  <div id="app">
    <h1>黑马头条</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div>
      <i class="iconfont icon-pinglun"></i>
      <i class="iconfont icon-shoucang"></i>
    </div>
    <br>
    <div>
      <van-icon name="chat-o" dot />
      <!-- <van-icon name="chat-o" badge="9" />
      <van-icon name="chat-o" badge="99+" /> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>

