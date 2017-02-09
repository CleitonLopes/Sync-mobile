<script>

	export default {

		name: 'Titles',

		props: {

			title: {

				type: String,
				required: true
			},

			subTitle: {

				type: String,
				required: true
			}
		}
	}

</script>

<template>

	<div class="status-bar-box">
		<div class="status-bar">
			<h1>{{ title }}</h1>
			<h2>{{ subTitle }}</h2>
		</div>
	</div>

</template>