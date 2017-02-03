<script>

	export default {

		name: 'Form-Input-Radio',

		props: {

			title: {

				type: String,
				required: true
			},

			ativo: {

				type: String,
				required: true
			},

			inativo: {

				type: String,
				required: true
			},

			elClass: String
		}

	}

</script>

<template>


	<div class="form-group row">

		<label for="" :class="elClass"><h4>{{ title }}</h4></label>

		<div :class="elClass">

			<div class="form-check">

				<label for="" class="form-check-label">

					<input type="radio" class="form-check-input" name="situacao1" id="situacao1" value="true">

					{{ ativo }}

				</label>

			</div>

		</div>

		<div class="form-check">

			<label for="" class="form-check-label">

				<input type="radio" class="form-check-input" name="situacao2" id="situacao2" value="false">

				{{ inativo }}

			</label>

		</div>

	</div>



</template>