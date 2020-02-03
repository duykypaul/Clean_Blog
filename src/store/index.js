import Vue from 'vue'
import Vuex from 'vuex'
import blogList from "../mocks/blogs";

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		blogList: blogList,
		isLogin: false
	},
	getters: {
	
	},
	actions: {
		logOut({commit}){
			commit('CHANGE_IS_LOGIN');
		},
		logIn({commit}, data){
			if(data.email === 'admin@gmail.com' && data.password === 'admin') {
				commit('CHANGE_IS_LOGIN');
			}
		}
	},
	mutations: {
		CHANGE_IS_LOGIN(state){
			state.isLogin = !state.isLogin;
		}
	}
});
export default store;