<script>

import { mapActions } from 'vuex'

export default {

	nmae: "Form",

	data () {

		return {

			customer: {

				razaosocial: '',
				nomefantasia: '',
				situacao: 'true',
				fisicajuridica: 'F',
				cpfcnpj: '',
				cep: '',
				logradouro: '',
				endereco: '',
				numero: '',
				bairro: '',
				complemento: '',
				codigointegracao: ''
			}
		}
	},

	computed: {

		isValid() {

			return this.customer.razaosocial != '' && this.customer.fantasia != '' &&
					this.customer.situacao != '' && this.customer.fisicajuridica != '' &&
					this.customer.cpfcnpj != '' && this.customer.cpfcnpj.length < 14 &&
					this.customer.cep != '' && this.customer.logradouro != '' &&
					this.endereco != '' && this.customer.numero != '' &&
					this.numero != '' && this.customer.bairro != ''
		}
	},

	methods: {

		...mapActions(['save']),

		saveCustomer() {

			this.save(this.customer)

		}

	}

}

</script>

<template>

	<div class="content-container">

		<div class="content">

			<form class="form-horizontal">

				<div class="row">

					<div class="col-xs-12 col-sm-8 col-md-6 col-lg-6">
						<label class="tituloForm">Razão Social</label>
						<div class="boxInput">
							<input type="text" v-model="customer.razaosocial" class="form-control">
						</div>
					</div>


					<div class="col-xs-12 col-sm-8 col-md-6 col-lg-6">
						<label  class="tituloForm">Fantasia</label>
						<div class="boxInput">
							<input type="text" v-model="customer.nomefantasia" class="form-control">
						</div>
					</div>

					<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
						<label  class="tituloForm">CPF/CNPJ</label>
						<div class="boxInput">
							<input type="text" v-model="customer.cpfcnpj" class="form-control">
						</div>
					</div>

					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-2">
						<label  class="tituloForm">Situação</label>
						<div class="boxInput">

							<div class="form-check">
								<label class="tituloForm">
									<input type="radio" class="form-check-input" v-model="customer.situacao" name="optSituacao1" id="optSituacao1" value="true">
									Ativo
								</label>

								<label class="tituloForm">
									<input type="radio" class="form-check-input" v-model="customer.situacao" name="optSituacao2" id="optSituacao2" value="false">
									Inativo
								</label>

							</div>

						</div>
					</div>

					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
						<label  class="tituloForm">Tipo</label>


						<div class="boxInput">

							<select class="form-control" v-model="customer.fisicajuridica">
								<option value="F">Física</option>
								<option value="J">Jurídica</option>
							</select>

						</div>
					</div>

					<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
						<label class="tituloForm">CEP</label>
						<div class="boxInput">
							<input type="text" v-model="customer.cep" class="form-control">
						</div>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<label  class="tituloForm">Logradouro</label>
						<div class="boxInput">
							<input type="text" v-model="customer.logradouro" class="form-control">
						</div>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
						<label  class="tituloForm">Endereço</label>
						<div class="boxInput">
							<input type="text" v-model="customer.endereco" class="form-control">
						</div>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
						<label  class="tituloForm">Número</label>
						<div class="boxInput">
							<input type="text" v-model="customer.numero" class="form-control">
						</div>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

						<label  class="tituloForm">Bairro</label>
						<div class="boxInput">
							<input type="text" v-model="customer.bairro" class="form-control">
						</div>

					</div>

					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">

						<label  class="tituloForm">Complemento</label>
						<div class="boxInput">
							<input type="text" v-model="customer.complemento" class="form-control">
						</div>

					</div>


				</div>

				<button :disabled="!isValid" type="submit" @click="saveCustomer()" class="btn btn-primary">Cadastrar</button>

			</form>

		</div>
	</div>


</template>