<template>
  <div class="setting flex-col flex-ac">
    <div class="setting-title flex-row flex-jc flex-ac">
      <h2>可加花里胡哨的动态图</h2>
    </div>
    <div class="setting-content">
      <h3>设置页</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Setting',
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