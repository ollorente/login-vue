<template>
    <div class="page-about">
		<TheNabar />

        <div class="container">
			<div class="row">
				<div class="col-12">
					<h1>About</h1>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	import TheNabar from '~/components/general/TheNavbar'

	export default {
		name: 'about',
		components: {
			TheNabar
		}
	}
</script>
