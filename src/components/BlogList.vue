<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-md-10 mx-auto">
				<blog-item
						v-for="(item) in blogList"
						:key="item.id"
						:blog="item"
				/>
				
				<!-- Pager -->
				<div class="clearfix">
					<a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import BlogItem from "./BlogItem";
	export default {
		name: "blog-list",
		components: {BlogItem},
		computed: {
			...mapState([
				'blogList'
			])
		}
	}
</script>

<style scoped>

</style>