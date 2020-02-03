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
	import {formatDate} from "../helpers";
	
	export default {
		name: "blog-item",
		props: {
			blog: {type: Object, default: {}}
		},
		computed: {
			formatDate() {
				return formatDate(this.blog.created_at);
			},
			formatTitle(){
				return this.blog.title.replace('.', '').split(' ').join('-').toLowerCase();
			}
			
			
		}
	}
</script>

<style scoped>

</style>