<script>

	import CpFormInput from './form-input.vue'

	import CpFormInputRadio from './form-input-radio.vue'

	import CpFormInputSelect from './form-input-select.vue'

	import CpFormInputBasic from './form-input-basic.vue'

	export default {

		name: 'Customer',

		data () {

			return {

			}
		},

		components: {

			CpFormInput, CpFormInputRadio, CpFormInputSelect, CpFormInputBasic
		}

	}

</script>

<template>

	<div>

		<div class="container">

			<div class="jumbotron">

				<h1 class="display-3">Clientes</h1>

				<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

				<hr class="my-4">

			</div>

			<div class="tab-content">

				<div role="tabpanel" class="tab-pane fade in active" id="customer">

					<cp-form-input title="Razão Social" el-class="col-xs-10"/>

					<cp-form-input title="Fantasia" el-class="col-xs-10"/>

					<cp-form-input title="CPF/CNPJ" el-class="col-xs-4" />

					<cp-form-input-radio title="Situação" ativo="Ativo" inativo="Inativo" el-class="col-xs-2 col-form-label"/>

					<cp-form-input-select title="Tipo"/>

					<cp-form-input-basic title1="CEP" title2="Logradouro" title3="Endereço" title4="Numero" title5="Bairro" title6="Complemento">

				</div>

			</div>


		</div>

	</div>

</template>