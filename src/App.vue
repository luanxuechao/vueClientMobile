<template>
	<div id='app'>
		<div>
			<router-view class="router-view"></router-view>
		</div>
	</div>
</template>

<script>
	import {Tabbar, TabbarItem, XHeader} from 'vux'
	require('./assets/iconfonts/iconfont.css')
	require('./assets/css/main.css')
	export default {
		name: 'app',
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';

	body {
		background-color: #fbf9fe;
	}
</style>
