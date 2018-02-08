<template>
<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		<sidebar></sidebar>
		<div>
			<!-- <navbar></navbar> -->
			<!-- <tags-view></tags-view> -->
			<app-main></app-main>
		</div>
</div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

// <style rel="stylesheet/scss" lang="scss" scoped>
// 	@import "src/styles/mixin.scss";
// 	.app-wrapper {
// 	  @include clearfix;
// 	  position: relative;
// 	  height: 100%;
// 	  width: 100%;
// 	}
// </style>

<style>.cls-1{fill:#2a7391;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#ef7e25;}</style>
