<template>
  <div class="popup" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  components: {},
  data() {
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message){
      this.isShow = true;
      this.message = message;
    }
  }
}
</script>

<style scoped>
  .popup{
    position:fixed;
    top:50%;
    left:50%;
    background-color: rgba(0,0,0,.7);
    color:#fff;
    padding:8px 10px;
    transform: translate(-50%,-50%);
    border-radius: 8px;
    z-index: 999;
  }
</style>
