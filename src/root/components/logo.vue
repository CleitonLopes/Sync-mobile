<script>

	export default {

		name: 'Logo'

	}

</script>

<template>

	<div class="box-logo">

		<img class="logo" src="src/assets/img/logo-sync.svg">

	</div>

</template>

<style scoped>

.box-logo {
	width: 100%;
	height: 100px;
	max-width: 300px;
	position: relative;
	float: left;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#0d90c9+0,0b73b2+100 */
	background: #0d90c9; /* Old browsers */
	background: -moz-linear-gradient(-45deg,  #0d90c9 0%, #0b73b2 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(-45deg,  #0d90c9 0%,#0b73b2 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(135deg,  #0d90c9 0%,#0b73b2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0d90c9', endColorstr='#0b73b2',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.logo {
	width: 133px;
	position: relative;
	margin: 0 auto;
	height: 25px;
	align-items: center;
	display: flex;
}

</style>

