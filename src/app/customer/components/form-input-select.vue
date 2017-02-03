<script>

	export default {

		name: 'Form-Input-Select',

		props: {

			title: {

				type: String,
				required: true

			},

			elClass: String
		}

	}

</script>

<template>

	<div class="form-group row">

		<label for="" class="col-xs-2 col-form-label"><h4>{{ title }}</h4></label>

		<div class="col-xs-4">

			<select class="form-control">

				<option value="F">Fisica</option>

				<option value="J">Juridica</option>

			</select>
		</div>

	</div>

</template>