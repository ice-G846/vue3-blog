<template>
  <div class="navigation">
    <div class="navigation-title">个人中心</div>
    <hr>
    <div class="navigation-item" :class="index===selectIndex?'navigation-item-select':''" v-for="(item, index) in navigation" :key="index" @click="navSelect(index)">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['navigation', 'selectIndex'],
  setup(props, { attrs, slots, emit }) {
    // 左侧导航选中事件
    function navSelect(index) {
      emit('changeNavigation', index)
    }
    return {
      navSelect
    }
  }
}

</script>
<style lang='scss' scoped>
.navigation{
  width: 100%;
  padding: 8px 0;
  background: rgba(255,255,255,.8);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .1);
  border-radius: 0 0 5px;
  hr{
    width: 100%;
    border: none;
    height: 1px;
    background-color: #ddd;
    margin-bottom: 8px;
  }
  &-title{
    width: 100%;
    height: 43px;
    line-height: 43px;
    text-align: center;
    color:#8a8a8a;
  }
  &-item{
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
    color: #555666;
    &-select{
      background:rgba(240, 240, 245, 0.8);
    }
    &:hover{
      background:rgba(240, 240, 245, 0.8);
    }
  }
}
</style>