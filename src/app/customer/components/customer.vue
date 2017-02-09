<script>

	import CpTitle from '../../../root/components/title.vue'

	import CpForm from './Form/form.vue'

	// import CpFormInput from './form-input.vue'

	// import CpFormInputRadio from './form-input-radio.vue'

	// import CpFormInputSelect from './form-input-select.vue'

	// import CpFormInputBasic from './form-input-basic.vue'

	export default {

		name: 'Customer',

		data () {

			return {

				title: 'Clientes',
				subTitle: 'Cadastre novos clientes para fazer a atualização de Software'

			}
		},

		components: {

			CpTitle, CpForm
		}

	}

</script>

<template>

	<div class="flex-container">

		<cp-title title="Clientes" subTitle="Cadastre novos clientes para fazer a atualização de Software"/>

		<cp-form />
	</div>

</template>