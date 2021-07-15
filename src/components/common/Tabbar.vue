<template>
  <div class="tabbar flex-row flex-jc">
    <div class="tabbar-logo flex-row flex-ac">
      <img class="tabbar-logo-img" src="/@/assets/logo.png" alt="logo">
    </div>
    <div class="tabbar-list flex-row flex-ac">
      <div class="tabbar-list-item" v-for="(item, index) in 5" :key="index" @click="tabbarClick(index)">栏目{{ item }}</div>
    </div>
    <div class="tabbar-search flex-row flex-ac">
      <el-input class="tabbar-search-input" v-model="input" placeholder="请输入内容"></el-input>
      <el-button class="tabbar-search-button" icon="el-icon-search" circle></el-button>
    </div>
    <div class="tabbar-login flex-row flex-ac">
      <a class="tabbar-login-login flex-row flex-ac" @click="login">登录</a>
      <span class="tabbar-login-cut">|</span>
      <a class="tabbar-login-register flex-row flex-ac" @click="register">注册</a>
    </div>
  </div>
</template>

<script>
import { getMsg } from '/@/request/api.js'
export default {
  name: 'Tabbar',
  data() {
    return {
      input: ''
    }
  },
  created() {
    getMsg().then(res => {
      console.log(res)
    })
  },
  methods: {
    // 登录
    login() {
      console.log('login')
    },
    // 注册
    register() {
      console.log('register');
    },
    // 栏目列表点击
    tabbarClick(index) {
      console.log(index)
    }
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
      width: 200px; 
      &-img{
        width: 160px;
      }
    }
    &-list{
      height: 72px;
      width: 600px;
      &-item{
        padding: 0 16px;
        color: #545C63;
        text-align: center;
        font-size: 16px;
        height: 72px;
        line-height: 72px;
        width: 100px;
        &:hover{
          cursor: pointer;
        }
      }
    }
    &-search{
      height: 72px;
      width: 300px;
      &-input{
        width: 300px;
      }
    }
    &-login{
      height: 72px;
      width: 100px;
      padding: 0 20px;
      & a:hover{
        cursor:pointer;
      }
      &-cut{
        color: #bbbbbb;
      }
      &-login{
        margin-right: 10px;
        height: 72px;
        width: 60px;
        &:hover{
          color: rgb(41, 166, 250);
        }
      }
      &-register{
        margin-left: 20px;
        height: 72px;
        width: 60px;
        &:hover{
          color: rgb(41, 166, 250);
        }
      }
    }
  }
// 修改el组件样式
:deep(.tabbar-search-input){
  width: 250px;
  margin-right: 20px;
}
</style>