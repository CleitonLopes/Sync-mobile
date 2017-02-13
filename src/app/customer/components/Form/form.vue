<script>

import CpMessageSuccess from '../../../../root/components/message-success.vue'

import CpMessageError from '../../../../root/components/message-error.vue'

import { mapActions, mapState } from 'vuex'

export default {

	nmae: "Form",

	components: {

		CpMessageSuccess, CpMessageError

	},

	data () {

		return {

			customer: {

				razaosocial: null,
				nomefantasia: null,
				situacao: 'true',
				fisicajuridica: 'F',
				cpfcnpj: null,
				cep: null,
				logradouro: null,
				endereco: null,
				numero: null,
				bairro: null,
				complemento: null,
				codigointegracao: null
			},

			message: {

				success: false,
				error: false

			}
		}
	},

	computed: {

		isValid() {

			return  this.customer.razaosocial != '' && this.customer.razaosocial != null &&
					this.customer.situacao != '' && this.customer.situacao != null &&
					this.customer.fisicajuridica != '' && this.customer.fisicajuridica != null &&
					this.customer.cpfcnpj != '' && this.customer.cpfcnpj != null &&
					this.customer.cep != '' && this.customer.cep != null &&
					this.customer.logradouro != '' && this.customer.logradouro != null &&
					this.customer.endereco != '' && this.customer.endereco != null &&
					this.customer.numero != '' && this.customer.numero != null &&
					this.customer.bairro != '' && this.customer.bairro != null
		}
	},

	methods: {

		...mapActions(['save']),

		saveCustomer() {

			self = this;

			self.message.success= false
			self.message.error = false

			this.save(this.customer)

			.then((response) => {

				console.log(response)

			})

			.catch((error) => {

				console.log(error)

			})

		}

	}

}

</script>

<template>

	<div>

	<div v-show="message.success">

		<cp-message-success title="Cliente" description=" cadastrado com sucesso !"/>

	</div>

	<div v-show="message.error">

		<cp-message-error title="Erro" description=" ao cadastrar cliente !"/>

	</div>


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
						<label  class="tituloForm">CPF/CNPJ</label>

						<div v-if="customer.fisicajuridica == 'F'" class="boxInput">
							<input type="text" v-model="customer.cpfcnpj" class="form-control" maxlength="11">
						</div>

						<div v-else class="boxInput">
							<input type="text" v-model="customer.cpfcnpj" class="form-control" maxlength="14">
						</div>

					</div>

					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-2">
						<label  class="tituloForm">Situação</label>
						<div class="boxInput">

							<div class="form-check">
								<label class="tituloForm">
									<input type="radio" class="form-check-input" v-model="customer.situacao" value="true">
									Ativo
								</label>

								<label class="tituloForm">
									<input type="radio" class="form-check-input" v-model="customer.situacao" value="false">
									Inativo
								</label>

							</div>

						</div>
					</div>

					<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
						<label class="tituloForm">CEP</label>
						<div class="boxInput">
							<input type="text" v-model="customer.cep" class="form-control">
						</div>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
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

				<button :disabled="!isValid" @click.stop.prevent="saveCustomer()" class="btn btn-primary">Cadastrar</button>

			</form>

		</div>
	</div>

</div>


</template>