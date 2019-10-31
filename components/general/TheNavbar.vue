<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<nuxt-link to="/" class="navbar-brand">Navbar</nuxt-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav  ml-auto">
					<li class="nav-item">
						<nuxt-link to="/dashboard" class="nav-link">Dashboard</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link to="/about" class="nav-link">About</nuxt-link>
					</li>
					<li class="nav-item" v-if="!loggedIn">
						<nuxt-link to="/register" class="nav-link">Register</nuxt-link>
					</li>
					<li class="nav-item" v-if="!loggedIn">
						<nuxt-link to="/" class="nav-link">Login</nuxt-link>
					</li>
					<li class="nav-item" v-if="loggedIn">
						<nuxt-link to="/logout" class="nav-link">Logout</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
    </nav>
</template>

<script>
	export default {
		computed: {
			loggedIn() {
				return this.$store.getters.loggedIn
			}
		}
	}
</script>
