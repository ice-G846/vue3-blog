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
  }
}
</script>
