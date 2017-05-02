/**
 * Created by chao on 2017/4/24.
 */
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		user_name:'',
		SERVICE_URL:'http://127.0.0.1:1337'
	}
})
