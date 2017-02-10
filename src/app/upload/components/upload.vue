<script>

import CpTitle from '../../../root/components/title.vue'

 import CpTable from './table.vue'

 import CpUploadForm from './upload-form.vue'


export default {

	name: 'Upload',

	data () {

		return {

			loading: true
		}
	},

	components: {

		CpTitle, CpTable, CpUploadForm

	},

}

</script>

<template>

	<div class="flex-container">

		<cp-title title="Gerar Versão" subTitle="Clique em Gerar Versão no campo do cliente selecionado para subir uma nova versão"/>

		<cp-table title1="Código" title2="Razão" title3="Fantasia" title4="CPF/CNPJ" title5="Ultima Versão" title6="Gerar Versão"/>

		<cp-upload-form/>

	</div>


</template>