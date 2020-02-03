<template>
	<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		<div class="container">
<!--			<a class="navbar-brand" href="index.html">Start Bootstrap</a>-->
			<router-link to="/" tag="a" class="navbar-brand">Start Bootstrap</router-link>
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<router-link
							v-for="item in linkList"
							:key="item.to"
							tag="li"
							:to="item.to"
							exact-active-class="item.exactActiveClass"
							class="nav-item"
							activeClass=""
					>
						<a class="nav-link" >{{item.text}}</a>
					</router-link>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "navigation",
		data(){
			return {
				linkList: [
					{to: '/', text: 'Home', exactActiveClass: 'active'},
					{to: 'about-us', text: 'About Us', exactActiveClass: 'active'},
					{to: '/contact', text: 'Contact', exactActiveClass: 'active'},
					{to: '/login', text: 'Login', exactActiveClass: 'active'},
				]
			}
		}
		
	}
</script>

<style scoped>

</style>