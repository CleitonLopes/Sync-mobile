<script>

export default {

	name: 'Form-Label',

	props: {

		title: {

			required: true,
			type: String

		}

	}
}

</script>

<template>

	<div>

		<label for="" class="col-xs-2 col-form-label"><h4>{{ title }}</h4></label>

	</div>

</template>