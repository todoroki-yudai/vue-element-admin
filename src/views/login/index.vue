<template>
  <div id="mainContent">

    <div class="l-selector">
      <ul class="list_selector">
        <li class="list_selector__item list_selector__item_lang is-hide">
          <div class="list_selector__item-show list_selector__item-show-lang"><svg class="icon_set-1"><use xlink:href="/static/img/icon_set-1.svg#icon_arrow_d-1"/></svg><span class="text">English</span></div>
          <div class="list_selector__item-hide list_selector__item-hide-lang theme-is-hide">
            <ul>
              <li class="current"><span class="text">English</span></li>
              <li><a href="#" class="text">Comming soon</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <lang></lang>

    <div id="header">
      <logo-header></logo-header>
    </div>

    <div>
      <h1 class="title_main title_main--noLogin is-bold">Login</h1>
      <!-- <form id="form_login"> -->
      <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
        <div class="l-sec sec_formItems sec_formItems-login">
          <div class="l-content_sec">
            <div class="form-group form-group--text form-group--text-login">
              <label>User Name</label>
              <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
              </el-form-item>
              <p class="text-err theme-is-err">Error message</p>
              <p class="text-help">Help text....</p>
            </div>
            <div class="form-group form-group--text form-group--text-login">
              <label>Password</label>
              <el-form-item prop="password">
                <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="password" />
              </el-form-item>
              <p class="text-err theme-is-err">Error message</p>
              <p class="text-help">Help text....</p>
            </div>
          </div>
        </div>
        <div class="l-sec sec_btnSet-login">
          <div class="l-content_sec content_sec_btnSet-login">
            <div class="form-group form-group--btn form-group--btn-login">
              <!-- <button class="btn btn--cl-1 btn--size-1"　type='submit' name='action' value='login'>Login</button> -->
              <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.logIn')}}</el-button>
            </div>
            <p class="links"><a class="textLink" href="/register">Sign up for Peacecoin</a></p>
          </div>
        </div>
      </el-form>
    </div>
    <div id="footer">
      <p class="text-credit">Peacecoin © 2018</p>
    </div>
  </div>
</template>

<script>
import { isValidUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import SocialSign from './socialsignin'

import Lang from '../components/Lang'
import LogoHeader from '../components/LogoHeader'

export default {
  components: { LangSelect, SocialSign, LogoHeader, Lang },
  name: 'login',
  beforeCreate() {
    document.body.className = 'peaceWallet no-login login'
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isValidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('The password can not be less than 4 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
            console.log('error failed authorization!!!')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  @include relative;
  height: 100vh;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
