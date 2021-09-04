<template>
  <tabbar></tabbar>
  <router-view></router-view>
</template>

<script>
import Tabbar from '/components/common/Tabbar.vue'
import { showBackground, showClickIcon, showLady } from './utils/backgroung.js'
export default {
  name: 'App',
  components: {
    Tabbar,
  },
  created() {
    // 判断localStorage中是否有token——有则默认登录
    if(localStorage.getItem('token')) {
      this.$store.commit('setToken')
    }
    // 开启看板娘
    showLady();
    // 开启背景蜘蛛线特效
    showBackground()
    // 开启鼠标点击特效
    showClickIcon()
    //樱花
    
  },
}
</script>
<style lang="scss" scoped>
</style>