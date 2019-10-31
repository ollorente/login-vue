<template>
    <div class="page-dasboard">
		<TheNabar />

        <div class="container">
			<div class="row">
				<div class="col-12">
					<h1>Dashboard</h1>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	import TheNabar from '~/components/general/TheNavbar'

	export default {
		name: 'dashboard',
		components: {
			TheNabar
		}
	}
</script>
