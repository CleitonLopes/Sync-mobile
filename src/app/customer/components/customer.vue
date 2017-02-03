<script>

	//import CpFormList from './form-list.vue'
	import CpFormInput from './form-input.vue'

	import CpFormInputRadio from './form-input-radio.vue'

	export default {

		name: 'Customer',

		data () {

			return {

				form: [{

					title: 'Razão Social'

				},
				{

					title: 'Fantasia'

				},
				{

					title: 'CPFCNPJ'

				}]

			}
		},

		components: {

			CpFormInput, CpFormInputRadio
		}

	}

</script>

<template>

	<div>

		<div class="container">

			<cp-form-input title="Razão Social" el-class="col-xs-10"/>

			<cp-form-input title="Fantasia" el-class="col-xs-10"/>

			<CpFormInputRadio title="Situação" ativo="Ativo" inativo="Inativo" el-class="col-xs-2 col-form-label"/>


		</div>

	</div>

</template>