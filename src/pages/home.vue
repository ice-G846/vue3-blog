<template>
  <div>
    <tabbar></tabbar>
    <div>{{ msg }}</div>
    <button @click="toLogin">Login_page</button>
  </div>
</template>

<script>
import Tabbar from "/components/common/Tabbar.vue"

export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data() {
    return {
      msg: 'home'
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>