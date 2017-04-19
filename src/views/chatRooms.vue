<template>
	<div id='yy'>
		<x-header :left-options="{showBack: false}" title="聊天室"></x-header>
		<div class="chatRoom_bd">
			<panel :footer="footer" :list="list"></panel>
		</div>
	</div>
</template>
<style>
</style>
<script>
	import  Panel from '../components/Panel'
	import {XHeader} from 'vux'
	export default{

		components: {
			Panel,
			XHeader
		},
		data(){
			return {
				msg: 'hello vue',
				list: [{
					src: '../assets/defaultFace.png',
					title: '标题一',
					desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
					url: '/component/cell',
					nickName: 'Chevalier丶L',
					count: '2'
				}, {
					src: '../assets/1.jpeg',
					title: '标题二',
					desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
					nickName: 'Jess丶L',
					count: '2',
					url: {
						path: '/component/radio',
						replace: false
					}
				}, {
					src: '../assets/1.jpeg',
					title: '标题二',
					desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
					nickName: 'Jess丶L',
					count: '2',
					url: {
						path: '/component/radio',
						replace: false
					}
				}, {
					src: '../assets/1.jpeg',
					title: '标题二',
					desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
					nickName: 'Jess丶L',
					count: '2',
					url: {
						path: '/component/radio',
						replace: false
					}
				}, {
					src: '../assets/1.jpeg',
					title: '标题二',
					desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
					nickName: 'Jess丶L',
					count: '2',
					url: {
						path: '/component/radio',
						replace: false
					}
				}, {
					src: '../assets/1.jpeg',
					title: '标题二',
					desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
					nickName: 'Jess丶L',
					count: '2',
					url: {
						path: '/component/radio',
						replace: false
					}
				}, {
					src: '../assets/1.jpeg',
					title: '标题二',
					desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
					nickName: 'Jess丶L',
					count: '2',
					url: {
						path: '/component/radio',
						replace: false
					}
				}],
				footer: {
					title: '查看更多',
					url: 'http://vux.li'
				}

			}
		},

	}

</script>
