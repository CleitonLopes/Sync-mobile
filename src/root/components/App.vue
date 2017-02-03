<script>

	import CpTab from './tab.vue'

	export default {

		name: 'app',

		components: {

			CpTab

		},

		data () {

			return {

			}

		}

	}

</script>

<template>

	<div id="app">

		<cp-tab />

		<router-view></router-view>

	</div>

</template>
