<template>
  <div class="yxjhd">
    <top-img></top-img>
    <marking></marking>
  </div>
</template>

<script>
import TopImg from "./components/TopImg"
import Marking from './components/Marking.vue'

export default {
  name: 'App',
  components: {
    TopImg,
    Marking
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .yxjhd {
    height: 3000px;
    font-size: 16px;
    color:#fff;
    background-color: #58309B;
    text-align: center;
  }
</style>

