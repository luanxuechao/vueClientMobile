<template>
	<div>
		<div class="register_hd">
			<i class="iconfont">&#xe734;</i>
		</div>
		<div class="register_bd">
			<div class="register_title">
				<span>注册账号</span>
			</div>
			<div class="register_area">
				<div class="register_area_bd">
					<span class="register_area_name">中国大陆</span>
					<span class="register_area_no">+86
					<i class="iconfont">&#xe662;</i>
				</span>
				</div>
			</div>
			<div class="register_mobile">
				<input placeholder="输入11位手机号"/>
			</div>
			<div class="register_password">
				<input placeholder="输入6-20位密码"/>
				<i class="iconfont">&#xe67b;</i>
			</div>
			<div class="bottom-button">
				<button class="login-button" @click="login()">
					<span>登 录</span>
				</button>
			</div>
			<div class="bottom-span">
				<span  ng-click="goLogin()">已经注册过VueChat？<span>点此登录</span></span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg: 'hello vue'
			}
		}
	}

</script>
