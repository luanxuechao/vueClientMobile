<template>
	<div class="vueChat-panel">
		<div class="panel__hd" v-if="header"  v-html="header"></div>
			<template v-if="type == 1">
				<div class="chatroom">
					<div class="chatroom-list" v-for="chatRoom in list">
						<div class="chatroom-face">
							<img src="../assets/1.jpeg" />
						</div>
						<div class="chatroom-status" v-if="chatRoom.title > 0">
							<span >{{chatRoom.count}}</span>
						</div>
						<div class="chatroom-basic">
							<h4 class="name">{{chatRoom.nickName}}</h4>
							<span class="time">19:07</span>
						</div>
						<span class="chatroom-message">{{chatRoom.desc}}</span>
					</div>
				</div>
			</template>
			<template v-if="type == 2">
				<a  v-for="item in list"  class='panel__bd'>
					<div class="panel_text">
						<img  :src="item.src" >
						<span>{{item.title}}</span>
					</div>


				</a>
			</template>
		</div>
</template>


<script>

export default {
  props: {
    header: String,
    footer: Object,
    list: Array,
	type:{
		type: String,
		default:'1'
	}
  }
}
</script>
