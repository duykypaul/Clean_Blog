<template>
	<div>
		<page-header title="Login Page"
		             subHeading="Please login to read blog"/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<form v-if="!isLogin" name="sentMessage" novalidate>
						<div class="control-group">
							<div class="form-group floating-label-form-group controls">
								<label>Email</label>
								<input v-model="email" type="email" class="form-control" placeholder="Email Address" id="email" required
								       data-validation-required-message="Please enter your email address.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="control-group">
							<div class="form-group col-xs-12 floating-label-form-group controls">
								<label>Password</label>
								<input v-model="password" type="password" class="form-control" placeholder="Password" id="password"
								       required
								       data-validation-required-message="Please enter your password.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<br>
						<div id="success"></div>
						<div class="form-group">
							<button @click="handleLogIn" type="submit" class="btn btn-primary">Login</button>
						</div>
					</form>
					<div v-else>
						<h3>Welcome Admin</h3>
						<button @click="goBackHome" class="btn btn-success">Go Back Home</button>
						<button @click="handleLogOut" class="btn btn-primary">Log Out</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageHeader from "../components/PageHeader";
	import {mapState, mapActions} from 'vuex';
	export default {
		name: "login",
		components: {PageHeader},
		data(){
			return {
				email: '',
				password: ''
			}
		},
		computed: {
			...mapState([
				'isLogin'
			])
		},
		methods: {
			...mapActions(['logOut', 'logIn']),
			handleLogOut(){
				this.logOut();
			},
			handleLogIn(){
				let data = {
					email: this.email, password: this.password
				}
				this.logIn(data);
			},
			goBackHome(){
				this.$router.push('/');
			}
		}
	}
</script>

<style scoped>

</style>