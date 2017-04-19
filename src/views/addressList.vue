<template>
	<div>
		<x-header :left-options="{showBack: false}" title="通讯录" class="addressList_hd"></x-header>
		<div class="addressList_bd">
			<div :id="list.title" v-for="list in lists" v-if="lists">
				<panel :header="list.title" :list="list.obj" :type="type"></panel>
			</div>
		</div>
		<div class="addressList_sidebar">
			<span v-for=" code in sides" v-on:click="onClick(code)">
					{{code}}
			</span>
		</div>
	</div>
</template>
<style>
</style>
<script>
	import Panel from '../components/Panel'
	import {XHeader, Toast} from 'vux'
	export default{
		methods: {
			onClick: function (code) {
				this.$vux.toast.show({
					type: 'text',
					text: code,
					position: 'middle'
				});
				var doc = document.getElementById(code)
				if (doc) {
					doc.scrollIntoView();
				}else{
				    var index = this.sides.indexOf(code);
				    while (index<this.sides.length){
						doc=document.getElementById(this.sides[index]);
						if (doc) {
							doc.scrollIntoView();
							return;
						}
				        index++
					}
				}

			}
		},
		data(){
			return {
				msg: 'hello vue',
				type: '2',
				sides: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
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
					},
					{
						title: 'D',
						obj: [{
							src: 'http://img1.imgtn.bdimg.com/it/u=2810857400,2789120607&fm=23&gp=0.jpg',
							title: '大哥',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://www.touxiang.cn/uploads/20130708/08-085339_957.jpg',
							title: '大姐',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://img4.imgtn.bdimg.com/it/u=766471795,842660247&fm=214&gp=0.jpg',
							title: '大啊大大',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}]
					},
					{
						title: 'G',
						obj: [{
							src: 'http://img1.imgtn.bdimg.com/it/u=2810857400,2789120607&fm=23&gp=0.jpg',
							title: '哥哥',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://www.touxiang.cn/uploads/20130708/08-085339_957.jpg',
							title: '格斯特',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}, {
							src: 'http://img4.imgtn.bdimg.com/it/u=766471795,842660247&fm=214&gp=0.jpg',
							title: '格蕾丝',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/component/cell'
						}]
					}]

			}
		},
		components: {
			XHeader,
			Panel,
			Toast
		}
	}
</script>
