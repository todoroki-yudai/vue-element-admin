<template>
<div class="l-selector">
  <ul class="list_selector">
    <li class="list_selector__item list_selector__item_user is-hide">
      <div class="list_selector__item-show list_selector__item-show-user"><svg class="icon_set-1"><use xlink:href="/static/img/icon_set-1.svg#icon_user-1"/></svg><span class="text">Taro Yamada</span></div>
      <div class="list_selector__item-hide list_selector__item-hide-user theme-is-hide">
        <ul>
          <!-- <li class="current"><a href="#" class="text">My Address</a></li> -->
          <li><a href="javascript:void(0)" @click="logout" class="text">Logout</a></li>
        </ul>
      </div>
    </li>
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
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>
