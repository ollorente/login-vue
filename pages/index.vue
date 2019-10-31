<template>
	<div class="container text-center">
		<div class="row">
			<div class="col-sm-6 offset-sm-3">

				<form action="#" class="form-signin" @submit.prevent="login">
					<img class="mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
					<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

					<label for="email" class="sr-only">Email address</label>
					<input type="email" id="email" name="email" class="form-control" placeholder="Email address" v-model="email" required autofocus>

					<label for="password" class="sr-only">Password</label>
					<input type="password" id="password" name="password" class="form-control" placeholder="Password" v-model="password" required>

					<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
					<p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
				</form>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data () {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login () {
				this.$store.dispatch('retrieveToken', {
					email: this.email,
					password: this.password,
				})
			}
		}
    }
</script>

<style scoped>
	html,
	body {
		height: 100%;
	}

	body {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		padding-top: 40px;
		padding-bottom: 40px;
		background-color: #f5f5f5;
	}

	.form-signin {
		width: 100%;
		max-width: 330px;
		padding: 15px;
		margin: auto;
	}

	.form-signin .checkbox {
		font-weight: 400;
	}

	.form-signin .form-control {
		position: relative;
		box-sizing: border-box;
		height: auto;
		padding: 10px;
		font-size: 16px;
	}

	.form-signin .form-control:focus {
		z-index: 2;
	}

	.form-signin input[type="email"] {
		margin-bottom: -1px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	.form-signin input[type="password"] {
		margin-bottom: 10px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	.bd-placeholder-img {
		font-size: 1.125rem;
		text-anchor: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	@media (min-width: 768px) {
		.bd-placeholder-img-lg {
			font-size: 3.5rem;
		}
	}
</style>
