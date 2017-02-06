<script>

import CpTable from './table.vue'

import CpUploadForm from './upload-form.vue'


export default {

	name: 'Upload',

	components: {

		CpTable,

		CpUploadForm

	},


	methods: {

		eventSetUpload(item) {

			return item

		}

	}


}

</script>

<template>

	<div class="container">

		<div class="jumbotron">

			<h1 class="display-3">Upload</h1>

			<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

			<hr class="my-4">

		</div>

		<div class="tab-content">

			<cp-table title1="Código" title2="Razão" title3="Fantasia" title4="CPF/CNPJ" title5="Gerar Versão" v-on:EVENT-SET-UPLOAD="eventSetUpload"/>

			<hr class="my-4">

		</div>

		<cp-upload-form :list="eventSetUpload"/>

	</div>

</template>