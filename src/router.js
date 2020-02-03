import Vue from 'vue'
import VueRouter from "vue-router";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import BlogList from "./components/BlogList";
import BlogDetail from "./pages/BlogDetail";

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
		component: BlogDetail
	}
];
const router = new VueRouter({
	mode: 'history',
	routes
})
export default router;