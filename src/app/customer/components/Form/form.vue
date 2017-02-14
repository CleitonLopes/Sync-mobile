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

		...mapState({

			getErrors: getters => {

				return getters.customer.errors

			},

			getMessage : getters => {

				return getters.customer.message
			}

		}),

		isValid() {

			const customer = this.customer

			 return _.isEmpty (

	 			customer.razaosocial && customer.situacao && customer.fisicajuridica &&
	 			customer.cpfcnpj && customer.cep && customer.logradouro && customer.endereco &&
	 			customer.numero && customer.bairro

			 )
		}
	},

	methods: {

		...mapActions(['save', 'setErrors']),

		/*
		* Chama método na action save()
		* retorna true ou false para apresentar a mensagem na tela
		*/
		saveCustomer() {

			this.save(this.customer)
		}

	}

}

</script>

<template>

	<div>

	<div v-show="getMessage.success">

		<cp-message-success title="Cliente" description=" cadastrado com sucesso !"/>

	</div>

	<div v-show="getMessage.error">

		<cp-message-error title="Falha ao gravar cliente," :description="getErrors"/>

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

					<div v-if="customer.fisicajuridica == 'F'" class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
						<label  class="tituloForm">CPF</label>

						<div class="boxInput">
							<input type="text" v-model="customer.cpfcnpj" class="form-control" minlength="11" maxlength="11" required>
						</div>

					</div>

					<div v-else class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
						<label class="tituloForm">CNPJ</label>

						<div  class="boxInput">
							<input type="text" v-model="customer.cpfcnpj" class="form-control" minlength="14" maxlength="14" required>
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
							<input type="text" v-model="customer.cep" class="form-control" maxlength="8">
						</div>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<label  class="tituloForm">Logradouro</label>
						<div class="boxInput">
							<input type="text" v-model="customer.logradouro" class="form-control" placeholder="av / rua / rodovia">
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

				<button :disabled="isValid" @click.stop.prevent="saveCustomer()" class="btn btn-primary">Cadastrar</button>

			</form>

		</div>
	</div>

</div>


</template>