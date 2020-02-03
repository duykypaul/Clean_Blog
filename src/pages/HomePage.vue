<template>
	<div>
		<page-header/>
		<blog-list/>
	</div>
	
</template>

<script>
	import BlogList from "../components/BlogList";
	import PageHeader from "../components/PageHeader";
	
	export default {
		name: "home-page",
		components: {PageHeader, BlogList}
	}
</script>

<style scoped>

</style>