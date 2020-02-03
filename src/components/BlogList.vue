<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-md-10 mx-auto">
				
				<blog-item/>
				<blog-item/>
				<blog-item/>
				<blog-item/>
				<blog-item/>
				<!-- Pager -->
				<div class="clearfix">
					<a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BlogItem from "./BlogItem";
	export default {
		name: "blog-list",
		components: {BlogItem}
	}
</script>

<style scoped>

</style>