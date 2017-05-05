import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import chatRoom from '@/views/chatRooms'
import addressList from '@/views/addressList'
import mine from '@/views/mine'
import find from '@/views/discover'
import index from '@/views/index'
import register from '@/views/register'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: '主页',
		component: index,
		children: [{
			path: '/find',
			name: '发现',
			component: find
		},
			{
				path: '/',
				name: '聊天室',
				component: chatRoom
			},
			{
				path: '/addressList',
				name: '通讯录',
				component: addressList
			},
			{
				path: '/mine',
				name: '我的',
				component: mine
			}]
	}, {
		path: '/register',
		component: register
	}]
})
