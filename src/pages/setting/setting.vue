<template>
  <div class="setting flex-col flex-ac">
    <div class="setting-container">
      <div class="setting-title flex-row flex-jc flex-ac">
        <img class="setting-title-img" src="/src/assets/image/banner.jpg" alt="">
      </div>
      <div class="setting-content flex-row flex-jsb">
        <div class="setting-content-navigation">
          <setting-navigation :navigation="navigation" :selectIndex="selectIndex" @changeNavigation="changeNavigation"></setting-navigation>
        </div>
        <div class="setting-content-main">
          <setting-profile v-if="selectIndex===0"></setting-profile>
          <div v-else-if="selectIndex===1">1</div>
          <div v-else-if="selectIndex===2">2</div>
          <div v-else-if="selectIndex===3">3</div>
          <div v-else-if="selectIndex===4">4</div>
          <div v-else-if="selectIndex===5">5</div>
          <div v-else>6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import settingNavigation from '/@/components/setting/settingNavigation.vue'
import settingProfile from '/@/components/setting/settingProfile.vue'

export default {
  name: 'Setting',
  components: {
    settingNavigation,
    settingProfile
  },
  setup() {
    // 侧边选项栏
    const navigation = reactive([
      { id: 0, name: '个人资料'},
      { id: 1, name: '账号设置'},
      { id: 2, name: '简历设置'},
      { id: 3, name: '我的关注'},
      { id: 4, name: '我的粉丝'},
      { id: 5, name: '我的收藏'},
      { id: 6, name: '文章管理'},
    ])
    // 当前选中导航栏第几个选项
    let selectIndex = ref(0)
    //  点击导航栏改变索引
    function changeNavigation(index) {
      selectIndex.value = index
    }
    return {
      // 左边导航栏
      navigation,
      selectIndex,
      changeNavigation
    }
  }
}

</script>
<style lang="scss" scoped>
.setting{
  width: 100%;
  &-container{
    min-width: 1300px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
    margin-bottom: 30px;
  }
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
    width: 1300px;
    background: rgba(255,255,255,.8);
    border-radius: 5px;
    &-navigation{
      width: 200px;
    }
    &-main {
      width: 1080px;
      height: 1000px;
      background: rgba(255,255,255,.8);
      box-shadow: -1px 1px 3px rgba(0, 0, 0, .1);
      border: 1px solid #ddd;
      border-radius: 0 0 5px;
    }
  }
}
</style>