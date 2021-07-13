<template>
  <div class="tabbar">
    <div class="tabbar-logo">logo</div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}

</script>
<style lang="scss" scoped>
  .tabbar{
    height: 72px;
    width: 100%;
    box-shadow: 0 1px 5px rgba(0,0,0,0.1);
    &-logo{
      height: 72px;
      width: 20%; 
      border: 1px solid red;
    }
  }
</style>