<script>

	import { mapState, mapActions } from 'vuex'

	import CpFormInput from '../../customer/components/form-input.vue'

	import CpLoading  from './loading.vue'

	import CpMessageSuccess from '../../../root/components/message-success.vue'

	import CpMessageError from '../../../root/components/message-error.vue'


	export default {

		name: 'Upload-Form',

		components: {

			CpFormInput, CpLoading, CpMessageSuccess, CpMessageError

		},

		data () {

			return  {

				versao: '',
				file: '',
				loading: false,

				message: {

					success: false,
					error: false

				}
			}
		},

		computed: {

			...mapState({

					selectedCustomer: getters => {

						return getters.customer.selectedCustomer
				}
			}),



			isValid () {

				return this.selectedCustomer.Id !== "" && this.versao != ""
			},

			isFileEmpty() {

				return this.file !== ""
			}
		},

		methods: {

			...mapActions(['uploadFile', 'clearCustomerSelected']),

			onFileChange (e) {

				let data = e.target.files[0]

				const formData = new FormData()

				formData.append('arquivo', data)
				formData.append('cliente_id', this.selectedCustomer.Id)
				formData.append('versao', this.versao)

				this.file = formData;

			},

			upload () {

				self = this

				self.loading = true;

				self.message.success = false

				self.message.error = false

				self.uploadFile(self.file)

				.then(function (response) {

					self.loading = false

					self.message.success = true

					self.clear()

				})

				.catch( function(error) {

					self.message.error = true

					console.log(error)

				})

			},

			clear () {

				this.clearCustomerSelected()

				this.versao = ''

				document.getElementById('file').value = ""

			}

		}


	}

</script>


<template>


	<div>

		<div v-show="loading" class="content-container">

			<div class="content">

				<cp-loading v-show="loading"/>

			</div>
		</div>

		<div v-show="message.success" id="message">

			<cp-message-success />

		</div>

		<div v-show="message.error" id="message">

			<cp-message-error />

		</div>



		<div v-show="!loading" class="content-container">

			<div class="content">

				<form class="form-horizontal" id="">

					<div class="row">

						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<label for="" class="tituloForm">Código</label>
							<div class="boxInput">
								<input type="text" v-model="selectedCustomer.Id" class="form-control">
							</div>
						</div>


						<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
							<label for="" class="tituloForm">Fantasia</label>
							<div class="boxInput">
								<input type="text" v-model="selectedCustomer.NomeFantasia" class="form-control">
							</div>
						</div>


						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<label for="" class="tituloForm">Versão</label>
							<div class="boxInput">
								<input type="text" v-model="versao" class="form-control">
							</div>
						</div>


						<div class="col-xs-12 col-sm6 col-md-6 col-lg-6">
							<label for="" class="tituloForm">Upload</label>
							<div class="boxInput">

								<input type="file" id="file" @change="onFileChange" class="form-control-file" :disabled="!isValid">

							</div>
						</div>



					</div>

					<button type="submit" class="btn btn-primary" @click="upload()" :disabled="!isFileEmpty">Gerar</button>

				</form>

			</div>

		</div>

	</div>




</template>