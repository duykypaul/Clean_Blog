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
					<li class="nav-item">
						<router-link to="/" tag="a" class="nav-link" exact-active-class="active" >Home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/about-us" tag="a" class="nav-link" exact-active-class="active">About Us</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/blog-detail/:title?.:id?" tag="a" class="nav-link" exact-active-class="active">Blogs</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/contact" tag="a" class="nav-link" exact-active-class="active">Contact</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "navigation"
	}
</script>

<style scoped>

</style>