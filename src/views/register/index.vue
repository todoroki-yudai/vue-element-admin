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
      <h1 class="title_main title_main--noLogin is-bold">Sign Up</h1>
      <el-form class="register-form" autoComplete="on" :model="registerForm" :rules="registerRules" ref="registerForm" label-position="left">
      <!-- <form id="form_signUp"> -->
        <div class="l-sec sec_formItems sec_formItems-signUp">
          <div class="l-content_sec">
            <div class="form-group form-group--text form-group--text-signUp">
              <label>User Name</label>
              <!-- <input type="text" class="theme-is-err" placeholder=""> -->
              <el-form-item prop="username">
                <el-input name="username" type="text" v-model="registerForm.username" autoComplete="on" placeholder="username" />
              </el-form-item>
              <p class="text-err theme-is-err">Error message</p>
              <p class="text-help">Help text....</p>
            </div>
            <div class="form-group form-group--text form-group--text-signUp">
              <label>Email</label>
              <el-form-item prop="email">
                <el-input name="email" type="text" v-model="registerForm.email" autoComplete="on" placeholder="email" />
              </el-form-item>
              <!-- <input type="email" class="theme-is-err" placeholder=""> -->
              <p class="text-err theme-is-err">Error message</p>
              <p class="text-help">Help text....</p>
            </div>
            <div class="form-group form-group--text form-group--text-signUp">
              <label>Password</label>
              <el-form-item prop="password">
                <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="registerForm.password" autoComplete="on" placeholder="password" />
              </el-form-item>
              <p class="text-err theme-is-err">Error message</p>
              <p class="text-help">Help text....</p>
            </div>
            <div class="form-group form-group--text form-group--text-signUp">
              <label>Confirm Password</label>
              <el-form-item prop="confirmPassword">
                <el-input name="confirmPassword" :type="passwordType" @keyup.enter.native="handleLogin" v-model="registerForm.confirmPassword" autoComplete="on" placeholder="confirm password" />
              </el-form-item>
              <!-- <input type="password" class="theme-is-err" placeholder=""> -->
              <p class="text-err theme-is-err">Error message</p>
              <p class="text-help">Help text....</p>
            </div>
            <div class="form-group form-group--checkbox form-group--checkbox-signUp">
              <div class="scroll_area scroll_area--signUp">
                <div class="scroll_area-content">
                  <h3>Privacy and Terms</h3>
                  <p>By choosing “I agree” below you agree to Peace Coin of Service.<br>You also agree to our Privacy Policy, which describes how we process your information,<br>including these key points:<br>Data we process when you Peace Coin<br>When you set up a Peace Coin Account, we store information you give us like your name,email address, and telephone number.<br>When you use Peace Coin to do things like write a message in mail, we store the information you create. We process information about that activity – including information like the video you<br>watched, device IDs, IP addresses, cookie data, and location.<br>Depending on your account settings, some of this data may be associated with your Peace Coin Account and we treat this data as personal information. You can control how we collect and use this data at My Account.<br>Why we process it We process this data for the purposes described in our policy, including to:<br>Help our services deliver more useful, customized content such as more relevant search results;<br>Improve the quality of our services and develop new ones;<br>Deliver personalized ads, both on Peace Coin services and on sites and apps that partner with Peace Coin;<br>Improve security by protecting against fraud and abuse; and Conduct analytics and measurement to understand how our services are used.<br>Combining data We also combine data among our services and across your devices for these purposes. For example, we show you ads based on information from your use of Search and mail, and we use data from trillions of search queries to build spell-correction models that we use across all of our services.</p>
                </div>
              </div>
              <!-- <input type="checkbox" class="theme-is-err el-checkbox__original" placeholder=""> -->
              <el-form-item prop="isAgree">
                <el-checkbox name="isAgree" v-model="registerForm.isAgree"></el-checkbox>
                <span class="text-label">I agree</span>
                <!-- <span class="fa fa-check-square-o" aria-hidden="true"></span>
                <span class="fa fa-square-o" aria-hidden="true"></span> -->
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="l-sec sec_btnSet-signUp">
          <div class="l-content_sec content_sec_btnSet-signUp">
            <div class="form-group form-group--btn form-group--btn-signUp">
              <!-- <button class="btn btn--cl-1 btn--size-1"　type='submit' name='action' value='submit'>Submit</button> -->
              <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleRegister">
                {{$t('register.register')}}
              </el-button>
            </div>
            <p class="links"><a class="textLink" href="/#/login">Login for Peacecoin</a></p>
          </div>
        </div>
      </el-form>
      <div id="footer">
        <p class="text-credit">Peacecoin © 2018</p>
      </div>
    </div>
  </div>

  <!-- <div class="register-container">
    <el-form class="register-form" autoComplete="on" :model="registerForm" :rules="registerRules" ref="registerForm" label-position="left">
      <div class="title-container">
        <h3 class="title">{{$t('register.title')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_register">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="registerForm.username" autoComplete="on" placeholder="username" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="registerForm.password" autoComplete="on" placeholder="password" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleRegister">{{$t('register.register')}}</el-button>

    </el-form>

    <el-dialog :title="$t('register.thirdparty')" :visible.sync="showDialog">
      {{$t('register.thirdpartyTips')}}
      <br/>
      <br/>
      <br/>
    </el-dialog>

  </div> -->
</template>

<script>
import { isValidateEmail, isValidUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import Lang from '../components/Lang'
import LogoHeader from '../components/LogoHeader'

export default {
  components: { LangSelect, LogoHeader, Lang },
  name: 'register',
  beforeCreate() {
    document.body.className = 'peaceWallet no-login login'
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isValidUsername(value)) {
        callback(new Error('The username can not be less than 6 and use alphanumeric characters'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (!isValidateEmail(value)) {
        callback(new Error('Please enter the correct email'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error('The password can not be less than 8 digits'))
      } else {
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error('The password can not be less than 8 digits'))
        return
      }
      if (this.registerForm.confirmPassword !== this.registerForm.password) {
        callback(new Error('Confirm password and password do not match'))
      } else {
        callback()
      }
    }
    const validateAgreeCheck = (rule, value, callback) => {
      if (!value) callback(new Error('Please check Privacy and Terms'))
      callback()
    }
    return {
      registerForm: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAgree: ''
      },
      registerRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        email: [{ required: true, trigger: 'blur', validator: validateEmail }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirmPassword: [{ required: true, validator: validateConfirmPassword }],
        isAgree: [{ required: true, validator: validateAgreeCheck }]
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
    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('RegisterByUsername', this.registerForm).then(() => {
            console.log('regist success !!!')
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            console.log('regist failed !!!')
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
.register-container {
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

.register-container {
  @include relative;
  height: 100vh;
  background-color: $bg;
  .register-form {
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
    &_register {
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
