import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import  index from '@/components/index'
import chatRoom from '@/views/chatRooms'
import addressList from '@/views/addressList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/',
      name:'聊天室',
      component:chatRoom
    },
    {
      path:'/addressList',
      name:'通讯录',
      component:addressList
    },

  ]
})
