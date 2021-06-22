<template>
  <div class="home-icon">
    <div class="icon-list" v-for="item in iconList" :key="item.id">
      <img :src="item.imgUrl">
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  components: {},
  data() {
    return {
      iconList:[{
        id:'01',
        imgUrl: require('@/assets/image/icon/icon1.png'),
        text:'故宫'
      },{
        id:'02',
        imgUrl:require('@/assets/image/icon/icon2.png'),
        text:'八达岭长城'
      },{
        id:'03',
        imgUrl:require('@/assets/image/icon/icon3.png'),
        text:'文化古迹'
      },{
        id:'04',
        imgUrl:require('@/assets/image/icon/icon4.png'),
        text:'天坛公园'
      }

      ]
    }
  }
}
</script>

<style scoped>
  .home-icon{

    
  }
</style>
