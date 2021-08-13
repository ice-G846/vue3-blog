<template>
  <!-- tabbar导航栏 -->
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
      <a class="tabbar-login-login flex-row flex-ac" @click="toLogin">登录</a>
      <span class="tabbar-login-cut">|</span>
      <a class="tabbar-login-register flex-row flex-ac" @click="toRegister">注册</a>
    </div>
  </div>
  <!-- 登录框 -->
  <el-dialog width="400px" v-model="modelShow" @closed="closeForm" :key="timer">
    <el-form status-icon ref="ruleForm" :model="form">
      <el-row class="dialog-item">
        <!-- <span class="dialog-title" :class="loginType == 1 ? 'login-select': ''" @click="smsLogin">验证码登录</span>
        <span class="dialog-title-cut">|</span> -->
        <span class="dialog-title" :class="loginType == 2 ? 'login-select': ''" @click="pwdLogin">密码登录</span>
      </el-row>
      <div class="dialog-box" v-if="loginType === 1">
        <p class="dialog-item-label">手机号：</p>
        <el-row class="dialog-item">
          <el-input class="search-input" v-model="form.phone" placeholder="+86"></el-input>
        </el-row>
        <p class="dialog-item-label">验证码：</p>
        <el-row class="dialog-item flex-row flex-jsb">
          <el-input class="dialog-item-code" v-model="form.code" placeholder="请输入验证码"></el-input>
          <el-button v-show="isGetCode" @click="sendCode" class="dialog-item-getcode" type="info">发送验证码</el-button>
          <el-button v-show="!isGetCode" class="dialog-item-getcode" disabled type="info">{{ getCodeTime }}秒后重新发送</el-button>
        </el-row>
      </div>
      <div class="dialog-box" v-if="loginType === 2">
        <p class="dialog-item-label">手机号：</p>
        <el-row class="dialog-item">
          <el-input class="search-input" v-model="form.phone" placeholder="+86"></el-input>
        </el-row>
        <p class="dialog-item-label">密码：</p>
        <el-row class="dialog-item flex-row flex-jsb">
          <el-input class="search-input" type="password" v-model="form.pwd" placeholder="请输入密码"></el-input>
        </el-row>
        <p class="dialog-item-label">验证码：</p>
        <el-row class="dialog-item flex-row flex-jsb">
          <el-input class="dialog-item-code" v-model="form.code" placeholder="请输入验证码"></el-input>
          <img :src="captcha" alt="" class="dialog-item-getcode" @click="changeCaptcha">
          <!-- <el-button v-show="isGetCode" @click="changeCode" class="dialog-item-getcode" type="info">(验证码图片)</el-button> -->
        </el-row>
      </div>
    </el-form>
    <div class="dialog-footer">
      <el-button class="dialog-register" type="info" @click="login(form)">确 定</el-button>
    </div>
    <!-- qq 微信登录 -->
    <div class="dialog-bottom flex-row flex-jc">
      <div class="dialog-bottom-item flex-row flex-jc">
        <span class="dialog-bottom-item-icon iconfont">&#xe63c;</span>
      </div>
      <div class="dialog-bottom-item flex-row flex-jc">
        <span class="dialog-bottom-item-icon iconfont">&#xe61a;</span>
      </div>
    </div>
  </el-dialog>
  <!-- 注册框 -->
  <el-dialog width="400px" v-model="modelShow2" @closed="closeForm" :key="timer">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row class="dialog-item">
        <span class="dialog-title2 login-select">注册账号</span>
      </el-row>
      <el-form-item label="手机号：" prop="phone">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-row class="dialog-item flex-row flex-jsb">
          <el-input class="dialog-item-code2" v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
          <img :src="captcha" alt="" class="dialog-item-getcode2" @click="changeCaptcha">
          <!-- <el-button v-show="isGetCode2" @click="sendCode2" class="dialog-item-getcode2" type="info">发送验证码</el-button> -->
          <!-- <el-button v-show="!isGetCode2" class="dialog-item-getcode" disabled type="info">{{ getCodeTime2 }}秒后重新发送</el-button> -->
        </el-row>
      </el-form-item>
      <el-button class="register-submit" type="info" @click="submitForm('ruleForm')">注册</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
import { register, captcha} from '/@/request/api.js'
export default {
  name: 'Tabbar',
  data() {
    var checkAge = (rule, value, callback) => {
      var mobile_mode=/^1[34578]\d{9}$/;
      if (!mobile_mode.test(value)) {
        return callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }
    return {
      input: '',
      // 是否显示登录面板
      modelShow: false,
      // 是否显示注册面板
      modelShow2: false,
      // 登录表单
      form: {
        phone: null,
        code: null,
        pwd: null
      },
      // 验证码时间切换
      isGetCode: true,
      isGetCode2: true,
      getCodeTime: 60,
      getCodeTime2: 60,
      timer: null,
      timer2: null,
      loginType: 2, // 1————验证码登录 2————密码登录
      // 注册表单+验证
      ruleForm: {
        pass: '',
        checkPass: '',
        phone: '',
        code: '',
        captcha: '', // 验证码域名
        timer: null // el-dialog缓存机制搞不了验证码刷新 绑定key可刷新
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    // 获取验证码图片
    this.getCaptcha()
  },
  methods: {
    // 登录
    toLogin() {
      this.modelShow = true
    },
    // 选择登录方式————验证码登录
    smsLogin() {
      this.loginType = 1
    },
    // 选择登录方式————密码登录
    pwdLogin() {
      this.loginType = 2
    },
    // 注册
    register() {
      console.log('register');
    },
    // 栏目列表点击
    tabbarClick(index) {
      console.log(index)
    },
    // 登录
    login(form) {
      if (this.loginType === 1) {
        // 验证码登录
        var mobile_mode=/^1[34578]\d{9}$/;
        if (!mobile_mode.test(this.form.phone)) {
          this.$message({
            type: 'info',
            message: '请输入正确的手机号'
          })
        } else {
          delete this.form.pwd
          console.log(form)
          this.modelShow = false
        }
      } else {
        // 手机号登录
        var mobile_mode=/^1[34578]\d{9}$/;
        if (!mobile_mode.test(this.form.phone)) {
          this.$message({
            type: 'info',
            message: '请输入正确的手机号'
          })
        } else {
          delete this.form.code
          console.log(form)
          this.modelShow = false
        }
      }
    },
    // 获取验证码图片
    getCaptcha() {
      const num = Math.ceil(Math.random() * 100)
      this.captcha = 'https://xchoy.com/api/login/captcha?' + num
    },
    // 变换验证码
    changeCaptcha() {
      const num = Math.ceil(Math.random() * 100)
      this.captcha = 'https://xchoy.com/api/login/captcha?' + num
      this.timer = new Date()
    },
    // 改变验证码
    changeCode () {
      console.log('变')
    },
    // 发送登录验证码
    sendCode() {
      var mobile_mode=/^1[34578]\d{9}$/;
      if (!mobile_mode.test(this.form.phone)) {
        this.$message({
            type: 'info',
            message: '请输入正确的手机号'
          })
      } else {
        // 60秒内不允许再发送验证码
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.getCodeTime = TIME_COUNT;
          this.isGetCode = false;
          this.timer = setInterval(() => {
            if (this.getCodeTime > 0 && this.getCodeTime <= TIME_COUNT) {
              this.getCodeTime--;
            } else {
              this.isGetCode = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }
    },
    // 发送注册验证码
    sendCode2() {
      var mobile_mode=/^1[34578]\d{9}$/;
      if (!mobile_mode.test(this.ruleForm.phone)) {
        this.$message({
            type: 'info',
            message: '请输入正确的手机号'
          })
      } else {
        // 60秒内不允许再发送验证码
        const TIME_COUNT = 60;
        if (!this.timer2) {
          this.getCodeTime2 = TIME_COUNT;
          this.isGetCode2 = false;
          this.timer2 = setInterval(() => {
            if (this.getCodeTime2 > 0 && this.getCodeTime2 <= TIME_COUNT) {
              this.getCodeTime2--;
            } else {
              this.isGetCode2 = true;
              clearInterval(this.timer2);
              this.timer2 = null;
            }
          }, 1000)
        }
      }
    },
    // 关闭登录弹窗
    closeForm() {
      this.form = {
        phone: null,
        code: null,
        pwd: null
      }
      this.loginType = 2
    },
    // 注册
    toRegister() {
      this.modelShow2 = true
    },
    // 注册提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            phone: this.ruleForm.phone,
            password: this.ruleForm.pass,
            captcha: this.ruleForm.code
          }
          console.log(data)
          register(data).then(res => {
            console.log(res)
          }).catch(err=> {
            console.log(err)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
        width: 130px;
        height: 72px;
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
.dialog{
  &-title{
    color: #b3b3b3;
    font-size: 20px;
    font-weight: bold;
    &:hover{
      cursor: pointer;
    }
    &-cut{
      font-size: 20px;
      margin: 0 10px;
    }
  }
  &-title2{
    color: #b3b3b3;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
  &-item{
    &-label{
      margin-bottom: 10px;
    }
  }
  &-bottom{
    height: 50px;
    width: 70%;
    margin: 0 auto;
    &-item{
      width: 50%;
      margin-top: 20px;
      &-icon{
        cursor: pointer;
        font-size: 40px;
        color: #c2c2c2;
      }
    }
  }
}
// 登录方式选中样式
.login-select{
  color: #606266;
}

// 修改el组件样式
:deep(.tabbar-search-input){
  width: 250px;
  margin-right: 20px;
}
:deep(.dialog-item){
  margin-bottom: 20px;
}
:deep(.dialog-register){
  margin-top: 10px;
  width: 360px;
}
:deep(.dialog-item-code){
  width: 220px;
}
:deep(.dialog-item-getcode){
  width: 130px;
}
:deep(.dialog-item-code2){
  width: 120px;
}
:deep(.dialog-item-getcode2){
  width: 100px;
}
:deep(.register-submit){
  width: 360px;
}
:deep(.el-form-item__label){
  text-align: center;
}
</style>