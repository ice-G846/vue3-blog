<template>
  <div><h1>{{title}}</h1></div>
  <button @click="toHome">to-home</button>
  <button @click="changeTitle">改变标题</button>
</template>

<script>
export default {
  name: 'login',
  methods: {
    toHome() {
      this.$router.push('/home')
    },
    changeTitle() {
      this.$store.commit('setTotalTitle', 'new-title')
    },
  },
  computed: {
    title() {
      return this.$store.state.totalTitle
    }
  }
}
</script>

<style>

</style>