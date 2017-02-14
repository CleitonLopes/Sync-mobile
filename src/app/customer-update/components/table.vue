<script>

	import { mapState, mapActions } from 'vuex'

	import CpTableEmployee from './table-employee.vue'

	export default {

		name: 'Table-Customer-Update',

		props: {

			title1: {

				type: String,
				required: true

			},
			title2: {

				type: String,
				required: true

			},
			title3: {

				type: String,
				required: true

			},
			title4: {

				type: String,
				required: true

			}

		},

		data () {

			return {

				configs: {

					orderBy: 'DataInclusao'
				}

			}
		},

		components: {

			CpTableEmployee
		},


		methods: {

			...mapActions(['getCustomers', 'selectedUpload']),

		},

		computed: {

			...mapState({

				listCustomers: getters => {

					return getters.customer.customers
				}

			}),

			list () {

				return _.orderBy(this.listCustomers, this.configs.orderBy)
			}

		},

		mounted() {

			this.getCustomers()
		}

	}

</script>

<template>

	<div>

	<div class="content-container">

		<div class="content-table">

			<table class="table table-bordered texto-table table-striped" id="mytable">

			<thead class="thead-default">

				<tr>

					<th>{{ title1 }}</th>
					<th>{{ title2 }}</th>
					<th>{{ title3 }}</th>
					<th>{{ title4 }}</th>

				</tr>

				</thead>

				<tbody>

					<tr v-for="item in list">
						<td  @click="selectedUpload(item.CpfCnpj)">{{ item.Id }}</td>
						<td  @click="selectedUpload(item.CpfCnpj)">{{ item.RazaoSocial }}</td>
						<td  @click="selectedUpload(item.CpfCnpj)">{{ item.NomeFantasia }}</td>
						<td  @click="selectedUpload(item.CpfCnpj)">{{ item.CpfCnpj }}</td>
					</tr>

				</tbody>

			</table>

		</div>
	</div>

	<cp-table-employee v-show="list" title1="Data" title2="Código do Vendedor" title3="Versão" />

	</div>


</template>

<style>


</style>