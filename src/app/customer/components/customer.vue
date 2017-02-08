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
<!--
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

	</div> -->


	<div class="flex-container">

		<div class="status-bar-box">
			<div class="status-bar">
				<h1>Clientes</h1>
				<h2>Cadastre novos clientes para fazer a atualização de Software</h2>
			</div>
		</div>

		<div class="content-container">
			<div class="content">

				<form class="form-horizontal" id="">

					<div class="row">

						<div class="col-xs-12 col-sm-8 col-md-6 col-lg-6">
							<label for="nome_aluno" class="tituloForm">Razão Social</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="nome_aluno">
							</div>
						</div>


						<div class="col-xs-12 col-sm-8 col-md-6 col-lg-6">
							<label for="cpf_aluno" class="tituloForm">Fantasia</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="cpf_aluno">
							</div>
						</div>

						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
							<label for="cpf_aluno" class="tituloForm">CPF/CNPJ</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="cpf_aluno">
							</div>
						</div>

						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-2">
							<label for="cpf_aluno" class="tituloForm">Situação</label>
							<div class="boxInput">

								<div class="form-check">
									<label class="tituloForm">
										<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
										Ativo
									</label>

									<label class="tituloForm">
										<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
										Inativo
									</label>

								</div>

							</div>
						</div>

						<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
							<label for="cpf_aluno" class="tituloForm">Tipo</label>


							<div class="boxInput">

								<select class="form-control" id="exampleSelect1">
									<option>Física</option>
									<option>Jurídica</option>
								</select>
							</div>
						</div>

						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
							<label for="cpf_aluno" class="tituloForm">CEP</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="cpf_aluno">
							</div>
						</div>

						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<label for="cpf_aluno" class="tituloForm">Lugradouro</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="cpf_aluno">
							</div>
						</div>

						<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
							<label for="cpf_aluno" class="tituloForm">Endereço</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="cpf_aluno">
							</div>
						</div>

						<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
							<label for="cpf_aluno" class="tituloForm">Número</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="cpf_aluno">
							</div>
						</div>

						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

							<label for="cpf_aluno" class="tituloForm">Bairro</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="cpf_aluno">
							</div>

						</div>

						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">

							<label for="cpf_aluno" class="tituloForm">Complemento</label>
							<div class="boxInput">
								<input type="text" class="form-control" id="cpf_aluno">
							</div>

						</div>


					</div>

					<button type="submit" class="btn btn-primary">Cadastrar</button>

				</form>

			</div>
		</div>
	</div>

</template>