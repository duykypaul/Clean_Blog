<template>
	<header class="masthead" :style="`background-image: url('${urlBg}')`">
		<div class="overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<div :class="className">
						<h1>{{title}}</h1>
						<span class="subheading">{{subHeading}}</span>
						<slot/>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: "page-header",
		props: {
			className: {type: String, default: 'site-heading'},
			title: {type: String, default: 'Clean Blog'},
			subHeading: {type: String, default: 'A Blog Theme by Start Bootstrap'},
			urlBg: {type: String, default: '/dist/img/home-bg.jpg'}
		}
	}
</script>

<style scoped>

</style>