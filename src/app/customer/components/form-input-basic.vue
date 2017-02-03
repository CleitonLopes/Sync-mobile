<script>

	export default {

		name: 'Form-Input-Basic',

		props: {

			title1: {

				type: String,
				required: true
			},
			title2: {

				type: String,
				required: true
			},
			title3: {

				type: String,
				required: true
			},
			title4: {

				type: String,
				required: true
			},
			title5: {

				type: String,
				required: true
			},
			title6: {

				type: String,
				required: true
			}
		}


	}

</script>

<template>

	<div>

		<div class="form-group row">
				<label for="" class="col-xs-2 col-form-label"><h4>{{ title1 }}</h4></label>
				<div class="col-xs-2">
					<input type="text" class="form-control" >
				</div>

				<label for="" class="col-xs-2 col-form-label"><h4>{{ title2 }}</h4></label>
				<div class="col-xs-6">
					<input type="text" class="form-control">
				</div>
			</div>

			<div class="form-group row">
				<label for="" class="col-xs-2 col-form-label"><h4>{{ title3 }}</h4></label>
				<div class="col-xs-6">
					<input type="text" class="form-control">
				</div>

				<label for="" class="col-xs-2 col-form-label"><h4>{{ title4 }}</h4></label>
				<div class="col-xs-2">
					<input type="text" class="form-control">
				</div>
			</div>

			<div class="form-group row">

				<label for="" class="col-xs-2 col-form-label"><h4>{{ title5 }}</h4></label>
				<div class="col-xs-4">
					<input type="text" class="form-control">
				</div>

				<label for="" class="col-xs-2 col-form-label"><h4>{{ title6 }}</h4></label>
				<div class="col-xs-4">
					<input type="text" class="form-control">
				</div>

			</div>
	</div>

</template>