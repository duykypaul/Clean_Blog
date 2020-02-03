import Vue from 'vue'
import VueRouter from "vue-router";
import store from "./store";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home-page',
		component: HomePage
	},
	{
		path: '/about-us',
		name: 'about-us',
		component: AboutUs
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact
	},
	{
		path: '/blog-detail/:title?.:id?',
		name: 'blog-detail',
		component: BlogDetail,
		beforeEnter: (to, from, next) => {
			if(store.state.isLogin){
				next();
			} else {
				next({path: '/login', query: {redirect: from.name}});
			}
			
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	}
];
const router = new VueRouter({
	mode: 'history',
	routes
})
export default router;