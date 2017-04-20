<template>
	<div class="mine">
		<x-header :left-options="{showBack: false}" title="发现"></x-header>
		<div class="mine_set">
			<i class="iconfont">&#xe67b;</i>
			<span>圈子</span>
		</div>
		<div class="mine_collection">
			<div class="mine_collect">
				<i class="iconfont">&#xe664;</i>
				<span>扫一扫</span>
			</div>
			<div class="mine_photo">
				<i class="iconfont">&#xe676;</i>
				<span>周边</span>
			</div>
		</div>
		<div class="mine_bag">
			<div class="mine_money">
				<i class="iconfont">&#xe69b;</i>
				<span>礼包</span>
			</div>
			<div class="mine_card">
				<i class="iconfont">&#xe6c0;</i>
				<span>游戏</span>
			</div>
		</div>
		<div class="mine_look">
			<i class="iconfont">&#xe6d4;</i>
			<span>备忘录</span>
		</div>
		<div class="mine_set">
			<i class="iconfont">&#xe6b0;</i>
			<span>匿名信</span>
		</div>
	</div>


</template>
<style>
</style>
<script>
	import {XHeader} from 'vux'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
			XHeader
        }
    }
</script>
