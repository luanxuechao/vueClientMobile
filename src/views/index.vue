<template>
	<div>
		<div style="overflow-x:hidden;width:100%">
			<router-view class="router-view"></router-view>
		</div>
		<tabbar class="vueChat-tabs" solt=''>
			<tabbar-item class="tabs-icon" selected :link="{path:'/'}">
				<span slot="label">聊天</span>
				<span slot='icon'>
          <i class="iconfont">&#xe639;</i>
		  </span>
			</tabbar-item>
			<div>
			  <span>
				  <span></span>
			  </span>
			</div>
			<tabbar-item class="tabs-icon" :link="{path:'/addressList'}">
				<span slot="label">通讯录</span>
				<span slot='icon'>
          <i class="iconfont">&#xe631;</i>
        </span>
			</tabbar-item>
			<tabbar-item class="tabs-icon" :link="{path:'/find'}">
				<span slot="label">发现</span>
				<span slot='icon'>
          <i class="iconfont">&#xe64f;</i>
        </span>
			</tabbar-item>
			<tabbar-item class="tabs-icon" :link="{path:'/mine'}">
				<span slot="label">我的</span>
				<span slot='icon'>
          <i class="iconfont">&#xe633;</i>
        </span>
			</tabbar-item>
		</tabbar>
	</div>

</template>
<script>
	import {Tabbar, TabbarItem, XHeader} from 'vux'
	export default {
		components: {
			Tabbar,
			TabbarItem,
			XHeader,
		},
		name: 'app',
		created:function () {
			if(!this.$store.state.userName){

			}
		}
	}
</script>
