<template>
  <div class="setting flex-col flex-ac">
    <div class="setting-title flex-row flex-jc flex-ac">
    </div>
    <div class="setting-content">
      <h3>设置页</h3>
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
    width: 100%;
    height: 200px;
    border: 1px solid green;
  }
  &-content{
    height: 300px;
    width: 1200px;
    background: #ffffff;
    border: 1px solid #000;
  }
}
</style>