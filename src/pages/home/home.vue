<template>
  <div class="content">
    <div class="content-title">{{ msg }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Home',
  components: {
  },
  setup() {
    const msg = ref('home-page')
    return {
      msg
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .content{
    &-title{
      padding-top: 20px;
      text-align: center;
    }
  }
</style>