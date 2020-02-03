<template>
	<div class="container">
		<div class="post-preview" v-if="blog">
			<router-link :to="{ name: 'blog-detail', params: { title: formatTitle, id: blog.id }}">
				<h2 class="post-title">
					{{blog.title}}
				</h2>
				<h3 class="post-subtitle">
					{{blog.summary}}
				</h3>
			</router-link>
			<p class="post-meta">Posted by
				<a href="#">{{blog.created_by}}</a>
				on {{formatDate}}</p>
		</div>
		<hr>
	</div>

</template>

<script>
	export default {
		name: "blog-item",
		props: {
			blog: {type: Object, default: {}}
		},
		computed: {
			formatDate() {
				let date = this.blog.created_at;
				let monthNames = [
					"January", "February", "March",
					"April", "May", "June", "July",
					"August", "September", "October",
					"November", "December"
				];
				
				let day = date.getDate();
				let monthIndex = date.getMonth();
				let year = date.getFullYear();
				
				return day + ' ' + monthNames[monthIndex] + ' ' + year;
			},
			formatTitle(){
				return this.blog.title.replace('.', '').split(' ').join('-').toLowerCase();
			}
			
			
		}
	}
</script>

<style scoped>

</style>