<template>
  <tabbar></tabbar>
  <router-view></router-view>
</template>

<script>
import Tabbar from '/components/common/Tabbar.vue'
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
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'src/assets/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-haru_2/assets/', //中间这个haru_2就是你的老婆,想换个老婆,换这个就可以了
        tagMode: false, // 1-haru_1 2-haru_2 3-hijiki(黑猫) 4-shizuku 5-tororo(白猫) 6-z16(海军mm)
        debug: false,
        model: { jsonPath: 'src/assets/live2dw/live2d-widget-model-haru_2/assets/haru02.model.json' },
        display: { position: 'letf', width: 250, height: 571 },  //调整大小,和位置
        mobile: { show: true },   //要不要盯着你的鼠标看
        log: false,
      })
    }, 1000)
  }
}
</script>
