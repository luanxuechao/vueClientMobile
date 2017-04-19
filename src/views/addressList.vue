<template>
	<div>
		<x-header :left-options="{showBack: false}" title="通讯录"></x-header>
		<div class ="addressList_bd">
			<div v-for="list in lists" v-if="lists">
				<panel :header="list.title" :list="list.obj" :type="type"></panel>
			</div>
		</div>
	</div>
</template>
<style>
</style>
<script>
	import Panel from '../components/Panel'
	import {XHeader} from 'vux'
	export default{
		data(){
			return {
				msg: 'hello vue',
				type: '2',
				lists: [
					{
						title: 'A',
						obj: [{
							src: 'http://img1.imgtn.bdimg.com/it/u=2810857400,2789120607&fm=23&gp=0.jpg',
							title: '奥巴马',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://img4.imgtn.bdimg.com/it/u=766471795,842660247&fm=214&gp=0.jpg',
							title: '奥尔本',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://img1.imgtn.bdimg.com/it/u=2810857400,2789120607&fm=23&gp=0.jpg',
							title: '阿加西',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}]
					}, {
						title: 'B',
						obj: [{
							src: 'http://img1.imgtn.bdimg.com/it/u=2810857400,2789120607&fm=23&gp=0.jpg',
							title: '表哥',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://www.touxiang.cn/uploads/20130708/08-085339_957.jpg',
							title: '表姐',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://img4.imgtn.bdimg.com/it/u=766471795,842660247&fm=214&gp=0.jpg',
							title: '冰岛',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}]
					},
					{
						title: 'C',
						obj: [{
							src: 'http://img1.imgtn.bdimg.com/it/u=2810857400,2789120607&fm=23&gp=0.jpg',
							title: '草',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://www.touxiang.cn/uploads/20130708/08-085339_957.jpg',
							title: '超',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://img4.imgtn.bdimg.com/it/u=766471795,842660247&fm=214&gp=0.jpg',
							title: '吵',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}]
					}]

			}
		},
		components: {
			XHeader,
			Panel
		}
	}
</script>
