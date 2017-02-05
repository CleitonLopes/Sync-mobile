import http from '../../../http.js'

export default {


	getCustomers(store) {

		return http.get('https://uinames.com/api/?ext')

		.then(response => response.data)

		.then(data => {

			store.commit('GET_CUSTOMERS', data)
		})

		.catch( function(error) {

			console.log(error)

		})

	},


	selectedCustomer(store, data) {

		store.commit('SET_CUSTOMERS', data)

	}
}