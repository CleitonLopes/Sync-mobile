<script>

	import CpTitle from '../../../root/components/title.vue'

	import CpTable from './table.vue'

	export default {

		components: {

			CpTitle, CpTable

		}

	}

</script>

<template>

	<div class="flex-container">

		<cp-title title="Histórico Versão" subTitle="Selecione a empresa para listar o histórico de atulizações feita pelos funcionários "/>

		<cp-table title1="Código" title2="Razão" title3="Fantasia" title4="CPF/CNPJ">

	</div>


</template>

<style>


</style>