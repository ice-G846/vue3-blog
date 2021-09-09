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
          <span class="profile-img-content-right-txt1">{{ userInfo.nickname }}</span>
          <span class="profile-img-content-right-txt2">{{ userInfo.sign }}</span>
        </div>
      </div>
    </div>
    <div class="profile-msg">
      <div class="profile-common-top flex-row flex-ac">
        <div class="profile-common-top-icon"></div>
        <span>我的信息</span>
      </div>
      <div class="profile-msg-content flex-col">
        <div class="profile-msg-content-nickname flex-row flex-ac">
          <div class="profile-msg-content-nickname-left">
            <p class="profile-msg-content-nickname-left-txt">昵称:</p>
          </div>
          <div class="profile-msg-content-nickname-right">
            <input type="text" class="profile-msg-content-nickname-right-input" placeholder="您的昵称" v-model="userInfo.nickname">
          </div>
        </div>
        <div class="profile-msg-content-userid flex-row flex-ac">
          <div class="profile-msg-content-userid-left">
            <p class="profile-msg-content-userid-left-txt">用户id:</p>
          </div>
          <div class="profile-msg-content-userid-right">
            <p class="profile-msg-content-userid-right-txt">{{ userInfo.userId }}</p>
          </div>
        </div>
        <div class="profile-msg-content-sign flex-row flex-ac">
          <div class="profile-msg-content-sign-left">
            <p class="profile-msg-content-sign-left-txt">个性签名:</p>
          </div>
          <div class="profile-msg-content-sign-right">
            <textarea class="profile-msg-content-sign-right-txt" cols="70" rows="5" placeholder="您的个性签名" v-model="userInfo.sign"></textarea>
          </div>
        </div>
        <div class="profile-msg-content-sex flex-row flex-ac">
          <div class="profile-msg-content-sex-left">
            <p class="profile-msg-content-sex-left-txt">性别:</p>
          </div>
          <div class="profile-msg-content-sex-right flex-row flex-ac">
            <div class="profile-msg-content-sex-right-item flex-row flex-jc" @click="changeSex(index)" :class="{'select-sex':index===sexSelect}" v-for="(item, index) in sex" :key="index">{{ item }}</div>
          </div>
        </div>
        <div class="profile-msg-content-birth flex-row flex-ac">
          <div class="profile-msg-content-birth-left">
            <p class="profile-msg-content-birth-left-txt">出生日期:</p>
          </div>
          <div class="profile-msg-content-birth-right">
            <el-date-picker
              v-model="birthTime"
              type="date"
              placeholder="选择日期"
              format="YYYY 年 MM 月 DD 日"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-bottom flex-row flex-jc">
      <div class="profile-bottom-submit" @click="submitMsg">
        保存
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: '',
  setup() {
    // 用户信息
    const userInfo = reactive({
      nickname: '冰-G',
      userId: 'swx_846',
      sign: '愿你被世界温柔以待'
    })
    // 用户性别
    const sex = reactive(['男', '女', '保密'])
    // 当前选中第几个性别框
    const sexSelect = ref(0)
    // 修改性别
    function changeSex (index) {
      sexSelect.value = index
    }
    // 出生日
    const birthTime = ref('')
    // 保存个人信息
    function submitMsg () {
      console.log(birthTime.value)
    }
    return {
      userInfo,
      sex,
      sexSelect,
      birthTime,
      changeSex,
      submitMsg,
    }
  }
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
      padding: 0 0 20px 0;
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
  &-msg{
    width: 100%;
    border-bottom: 1px solid #ddd;
    &-content{
      width: 100%;
      padding: 10px 0 30px;
      &-nickname{
        width: 100%;
        height: 60px;
        &-left{
          width: 100px;
          height: 60px;
          line-height: 60px;
          font-size: 14px;
          color: #535353;
          &-txt{
            text-align: right;
          }
        }
        &-right{
          flex: 1;
          height: 60px;
          line-height: 60px;
          padding-left: 20px;
          &-input{
            width: 225px;
            height: 25px;
            border-radius: 4px;
            border: 1px solid #bfcbd9;
            padding: 3px 10px;
            font-size: 13px;
            transition: all .2s;
            &:hover{
              border: 1px solid #8391a5;
            }
            &:focus{
              border: 1px solid rgb(255, 197, 207);
            }
          }
        }
      }
      &-userid{
        width: 100%;
        height: 50px;
        &-left{
          width: 100px;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          color: #535353;
          &-txt{
            text-align: right;
          }
        }
        &-right{
          flex: 1;
          height: 50px;
          line-height: 50px;
          padding-left: 20px;
          &-txt{
            color: #717171;
            font-size: 14px;
          }
        }
      }
      &-sign{
        width: 100%;
        height: 110px;
        padding-top: 16px;
        &-left{
          width: 100px;
          height: 110px;
          font-size: 14px;
          color: #535353;
          &-txt{
            text-align: right;
          }
        }
        &-right{
          flex: 1;
          height: 110px;
          line-height: 110px;
          padding-left: 20px;
          &-txt{
            font-family: '微软雅黑';
            resize: none;
            border-radius: 4px;
            border: 1px solid #bfcbd9;
            padding: 3px 10px;
            font-size: 13px;
            transition: all .2s;
            &:hover{
              border: 1px solid #8391a5;
            }
            &:focus{
              border: 1px solid rgb(255, 197, 207);
            }
          }
        }
      }
      &-sex{
        width: 100%;
        height: 50px;
        &-left{
          width: 100px;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          color: #535353;
          &-txt{
            text-align: right;
          }
        }
        &-right{
          flex: 1;
          height: 50px;
          line-height: 50px;
          padding-left: 20px;
          &-item{
            height: 26px;
            line-height: 26px;
            margin-right: 20px;
            border: 1px solid #bfcbd9;
            border-radius: 5px;
            cursor: pointer;
            padding: 0 7px;
            background: #f4f4f4;
            transition: all .2s;
          }
        }
      }
      &-birth{
        width: 100%;
        height: 50px;
        &-left{
          width: 100px;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          color: #535353;
          &-txt{
            text-align: right;
          }
        }
        &-right{
          flex: 1;
          height: 50px;
          line-height: 50px;
          padding-left: 20px;
          
        }
      }
    }
  }
  &-bottom{
    height: 80px;
    padding-top: 30px;
    &-submit{
      height: 36px;
      line-height: 36px;
      padding: 0 15px;
      border-radius: 6px;
      background: rgb(255, 158, 174);
      color: #fff;
      cursor: pointer;
    }
  }
}
.select-sex{
  background: rgb(255, 158, 174);
  border: 1px solid #ffffff;
  color: white;
}
/* 兼容浏览器输入框placeholder默认样式 */
input::-webkit-input-placeholder{
  color: #ccd0d7;
}
input:-moz-placeholder{
  color: #ccd0d7;
}
input::-moz-placeholder{
  color: #ccd0d7;
}
input:-ms-input-placeholder{
  color: #ccd0d7;
}
.profile-msg-content-sign-right-txt::-webkit-input-placeholder{
  color: #ccd0d7;
}
.profile-msg-content-sign-right-txt:-moz-placeholder{
  color: #ccd0d7;
}
.profile-msg-content-sign-right-txt::-moz-placeholder{
  color: #ccd0d7;
}
.profile-msg-content-sign-right-txt:-ms-input-placeholder{
  color: #ccd0d7;
}
</style>