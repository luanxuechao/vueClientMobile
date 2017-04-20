<template>
	<div class="mine">
		<x-header :left-options="{showBack: false}" title="我的"></x-header>
		<div class="mine_person">
			<img src="../assets/me.jpg"/>
			<span class="mine_nickName">Chevalier</span>
			<span class="mine_userName">账号:luanxuechao</span>
			<i class="iconfont">&#xe65f;</i>
		</div>
		<div class="mine_collection">
			<div class="mine_collect">
				<i class="iconfont">&#xe69d;</i>
				<span>收藏</span>
			</div>
			<div class="mine_photo">
				<i class="iconfont">&#xe6b2;</i>
				<span>相册</span>
			</div>
		</div>
		<div class="mine_bag">
			<div class="mine_money">
				<i class="iconfont">&#xe688;</i>
				<span>钱包</span>
			</div>
			<div class="mine_card">
				<i class="iconfont">&#xe6a6;</i>
				<span>卡包</span>
			</div>
		</div>
		<div class="mine_look">
			<i class="iconfont">&#xe684;</i>
			<span>表情</span>
		</div>
		<div class="mine_set">
			<i class="iconfont">&#xe68d;</i>
			<span>设置</span>
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
