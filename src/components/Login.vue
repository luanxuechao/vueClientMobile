<template>
	<div class="login_bg">
		<div class="login_picture">
			<img src="../assets/1.jpeg"/>
		</div>
		<div class="login_userName">
			<input type="text" v-model="userName" placeholder="邮箱/手机号/账户">
		</div>
		<div class="login_password">
			<input type="password" v-model="password" placeholder="密码">
		</div>
		<div class="bottom-button">
			<button class="login-button" @click="login()">
				<span>登 录</span>
			</button>
			<div class="login_forget">
				<span>忘记密码？</span>
			</div>
			<div class="login_register">
				<router-link to="/register">
					<span >注册新用户</span>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				userName: '',
				password: ''
			}
		},
		methods: {
			login: function () {

				let user = {
					userName: this.userName,
					password: this.password
				}
				// 显示
				this.$vux.loading.show({
					text: 'Loading'
				});
				this.$http.post(this.$store.state.SERVICE_URL + '/user/login', user).then(response => {


					this.$emit('login', response.data);
					this.$vux.loading.hide()

				}, response => {
					// error callback
					this.$vux.loading.hide()
				});

			}
		}
	}

</script>
