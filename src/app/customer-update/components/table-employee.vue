<script>

	import { mapState, mapActions } from 'vuex'

	export default {

		name: 'Table-Employee',

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
			}
		},

		data ()  {

			return {

				configs: {

					orderBy: 'Id'
				}
			}
		},

		methods: {



		},

		computed: {

			...mapState({

				listEmployee: getters => {

					return getters.customerUpdate.employee
				}
			}),

			list () {

				return _.orderBy(this.listEmployee, this.configs.orderBy)
			}
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

					</tr>

				</thead>

				<tbody>

					<tr v-for="item in list">

						<td>{{item.DataInclusao}}</td>
						<td>{{item.CodigoVendedor}}</td>
						<td>{{item.Versao}}</td>

					</tr>

				</tbody>

			</table>

		</div>

	</div>

</template>