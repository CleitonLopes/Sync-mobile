<script>

	import CpTitle from '../../../root/components/title.vue'

	import CpForm from './Form/form.vue'

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