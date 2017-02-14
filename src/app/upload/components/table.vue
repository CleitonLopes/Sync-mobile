<script>



	import { mapState, mapActions } from 'vuex'

	export default {

		name: 'Table-Upload',

		props: {

			title1: {

				type:String,
				required: true

			},
			title2: {

				type:String,
				required: true

			},
			title3: {

				type:String,
				required: true

			},
			title4: {

				type:String,
				required: true

			},
			title5: {

				type:String,
				required: true
			},
			title6: {

				type:String,
				required: true
			}

		},

		data () {

			return {

				configs: {

					orderBy: 'Id'
				}
			}
		},

		methods: {

			...mapActions(['getCustomers', 'selectedCustomer'])

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

		mounted () {

			this.getCustomers()

		}

	}

</script>

<template>


	<div class="content-container">

		<div class="content-table">

			<table class="table table-bordered table-hover texto-table">

				<thead class="thead-default">

					<tr>
						<th>{{ title1 }}</th>
						<th>{{ title2 }}</th>
						<th>{{ title3 }}</th>
						<th>{{ title4 }}</th>
						<th>{{ title5 }}</th>
						<th class="text-center">{{ title6 }}</th>
					</tr>

				</thead>

				<tbody>

					<tr v-for="item in list ">
						<td>{{ item.Id }}</td>
						<td>{{ item.RazaoSocial }}</td>
						<td>{{ item.NomeFantasia }}</td>
						<td>{{ item.CpfCnpj }}</td>
						<td class="texto-versao">{{ item.UltimaVersao }}</td>
						<td><a @click="selectedCustomer(item)"><img class="upload" src="src/assets/img/upload.svg"></a></td>
					</tr>

				</tbody>

			</table>

		</div>

	</div>

</template>