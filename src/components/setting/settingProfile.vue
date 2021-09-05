<template>
  <div class="profile">
    <div class="profile-img">
      <div class="profile-common-top flex-row flex-ac">
        <div class="profile-common-top-icon"></div>
        <span>我的头像</span>
      </div>
      <div class="profile-img-content flex-row">
        <div class="profile-img-content-left">
          <img class="profile-img-content-left-img" src="/@/assets/image/profile.png" alt="">
        </div>
        <div class="profile-img-content-right flex-col flex-jc">
          <span class="profile-img-content-right-txt1">冰-G</span>
          <span class="profile-img-content-right-txt2">愿你被世界温柔以待</span>
        </div>
      </div>
    </div>
    <div class="profile-msg">
      <div class="profile-common-top flex-row flex-ac">
        <div class="profile-common-top-icon"></div>
        <span>我的信息</span>
      </div>
      <div class="profile-msg-content">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  setup() {}
}

</script>
<style lang='scss' scoped>
.profile{
  width: 100%;
  &-common{
    &-top{
      width: 100%;
      height: 51px;
      line-height: 51px;
      border-bottom: 1px solid #ddd;
      &-icon{
        width: 4px;
        height: 16px;
        background: rgb(255, 154, 171);
        margin: 0 20px;
        border-radius: 5px;
      }
      span{
        color: rgb(255, 154, 171);
      }
    }
  }
  &-img{
    width: 100%;
    border-bottom: 1px solid #ddd;
    &-content{
      width: 100%;
      &-left{
        &-img{
          width: 92px;
          height: 92px;
          margin: 20px 30px 0 40px;
        }
      }
      &-right{
        flex:1;
        height: 132px;
        &-txt1{
          font-size: 20px;
          margin-bottom: 15px;
        }
        &-txt2{
          font-size: 14px;
          color: rgb(153, 153, 153);
        }
      }
    }
  }
}
</style>