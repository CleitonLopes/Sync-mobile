import http from '../../../http.js'

export default {


	getCustomers(store) {

		return http.get('http://www.bredasweb.com.br:8080/syncmobile/api/cliente')

		.then(response => response.data)

		.then(data => {

			store.commit('GET_CUSTOMERS', data.Data)
		})

		.catch( function(error) {

			console.log(error)

		})

	},


	selectedCustomer(store, data) {

		store.commit('SELECTED_CUSTOMERS', data)

	},

	save(store, data) {


		http.post('http://www.bredasweb.com.br:8080/syncmobile/api/cliente', data)

		.then(function(response) {

			console.log(response.data)

		})

		.catch( function(error) {

			console.log(error)

		})
	},

	clearCustomerSelected(store) {

		store.commit('CLEAR_CUSTOMERS_SELECTED')

	}
}