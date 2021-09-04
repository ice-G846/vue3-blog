<template>
  <div class="setting flex-col flex-ac">
    <div class="setting-title flex-row flex-jc flex-ac">
      <img class="setting-title-img" src="/src/assets/image/banner.jpg" alt="">
    </div>
    <div class="setting-content">
      <h3>设置也</h3>
    </div>
  </div>
</template>

<script>
import settingTop from '/@/components/setting/settingTop.vue'
export default {
  name: 'Setting',
  components: {
    settingTop
  },
  setup() {

  }
}

</script>
<style lang="scss" scoped>
.setting{
  width: 100%;
  &-title{
    width: 1300px;
    height: 200px;
    &-img{
      height: 100%;
      opacity: .8;
      z-index: -999;
    }
  }
  &-content{
    height: 1300px;
    width: 1300px;
    background: rgba(255,255,255,.8);
  }
}
</style>