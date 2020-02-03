<template>
	<div id="app">
		<navigation/>
		<router-view/>
		<hr/>
		<comp-footer/>
	</div>
</template>

<script>
	import Navigation from "./components/Navigation";
	import CompFooter from "./components/CompFooter";
	
	export default {
		name: 'app',
		components: {CompFooter, Navigation},
		data() {
			return {
			}
		}
	}
</script>

<style>

</style>
