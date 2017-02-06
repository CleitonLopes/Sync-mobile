<script>

	import http from '../../../http.js'

	import { mapState, mapActions } from 'vuex'

	export default {

		name: 'Table',

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
			}
		},

		data () {

			return {

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

			})

		},

		mounted () {

			this.getCustomers()

		}

	}

</script>

<template>

	<div class="container">

		<table class="table table-bordered table-hover">

			<thead class="thead-default">

				<tr>
					<th>{{ title1 }}</th>
					<th>{{ title2 }}</th>
					<th>{{ title3 }}</th>
					<th>{{ title4 }}</th>
					<th class="text-center">{{ title5 }}</th>
				</tr>

			</thead>

			<tbody>

				<!-- <tr v-for="(item, index) in getCustomers">
					<td>{{ item.Id }}</td>
					<td>{{ item.RazaoSocial }}</td>
					<td>{{ item.NomeFantasia }}</td>
					<td>{{ item.CpfCnpj }}</td>
					<td class="text-center"><a @click="setCustomer(item)"><i class="glyphicon glyphicon-cloud-upload"></i></a></td>
				</tr> -->

				<tr>
					<td>{{ listCustomers.phone }}</td>
					<td>{{ listCustomers.name }}</td>
					<td>{{ listCustomers.gender }}</td>
					<td>{{ listCustomers.email }}</td>
					<td class="text-center"><a @click="selectedCustomer(listCustomers)"><i class="glyphicon glyphicon-cloud-upload"></i></a></td>
				</tr>

		</tbody>

	</table>


</div>

</template>