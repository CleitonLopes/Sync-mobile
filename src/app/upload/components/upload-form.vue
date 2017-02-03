<script>

	import CpFormInput from '../../customer/components/form-input.vue'

	export default {

		name: 'Upload-Form',

		components: {

			CpFormInput

		},

		data () {

			return  {

				teste: ''
			}
		}


	}

</script>


<template>

	<div>

		<cp-form-input title="Código" el-class="col-xs-4"/>

		<cp-form-input title="Fantasia" el-class="col-xs-6"/>

		<cp-form-input title="Versão" el-class="col-xs-6" />

		<form action="" enctype="multipart/form-data">

			<div class="form-group row">

				<label for="" class="col-xs-2">Upload versão</label>

				<div class="col-xs-4">

					<input type="file" id="file" class="form-control-file">

					<small id="fileHelp" class="form-text text-muted">Para poder selecionar a versão, escolha o cliente na tabela.</small>

				</div>
			</div>
		</form>

	</div>

</template>