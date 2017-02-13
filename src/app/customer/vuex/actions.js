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


		return http.post('http://www.bredasweb.com.br:8080/syncmobile/api/cliente', data)

		.then((response) => {

			if(response.data.status < 300) {

				response.data.status

				//store.commit('SET_RESULT_POST_CUSTOMER', response.data)
			}

		})

		.catch((error) => {

			rerror.response
			//store.commit('SET_RESULT_POST_CUSTOMER', error.response)

		})
	},

	clearCustomerSelected(store) {

		store.commit('CLEAR_CUSTOMERS_SELECTED')

	},

}