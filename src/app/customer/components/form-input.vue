<script>

//import CpFormLabel from './form-label.vue'

export default {

	name: 'Form-Input',

	components: {

		//CpFormLabel

	},

	props: {

		title: {

			required: true,
			type: String

		},

		elClass: String,



	}

}

</script>

<template>

	<div>

		<!-- <cp-form-label title="Razao Social"/> -->

		<div class="form-group row">

			<label for="" class="col-xs-2 col-form-label"><h4>{{ title }}</h4></label>

			<div :class="elClass">

				<input type="text" class="form-control">

			</div>

		</div>

	</div>

</template>

<style>


</style>