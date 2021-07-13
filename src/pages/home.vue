<template>
  <div>
    <home-title></home-title>
    <div>{{ msg }}</div>
    <button @click="toLogin">Login_page</button>
  </div>
</template>

<script>
import HomeTitle from "/components/home/HomeTitle.vue"
export default {
  name: 'home',
  components: {
    HomeTitle
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