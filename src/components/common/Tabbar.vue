<template>
  <div class="tabbar">
    <div class="tabbar-logo">logo</div>
  </div>
</template>

<script>
// http://www.jufu-unique.com/app.php/Goods/getRebateRule
import { reactive, getCurrentInstance, onMounted } from "vue";

export default {
  name: 'Tabbar',
  setup() {
    let { proxy } = getCurrentInstance();

    let data = reactive({
      name: "hello"
    });

    onMounted(() => {
      console.log(proxy.$axios)
      proxy.$axios.get('http://www.jufu-unique.com/app.php/Goods/getRebateRule')
        .then(res => {
          console.log(res)
        })
    });

    return { data, proxy };
  }
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