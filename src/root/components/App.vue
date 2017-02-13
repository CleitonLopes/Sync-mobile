<script>

	import CpHeader from './header.vue'

	import CpMenu from './menu.vue'

	export default {

		name: 'app',

		components: {

			CpHeader, CpMenu

		},

		data () {

			return {

			}

		}

	}

</script>

<template>

		<div class="box-app">

			<cp-header />

			<cp-menu></cp-menu>

			<footer>Copyright © Breda's Sistemas</footer>

		</div>


</template>

<style>

</style>
