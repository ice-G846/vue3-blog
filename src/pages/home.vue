<template>
  <div class="content">
    <div class="content-title">{{ msg }}</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      msg: 'home-page'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .content-title{
    padding-top: 20px;
    text-align: center;
  }
</style>