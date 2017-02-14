//import http from '../../../http'

import { saveCustomer } from '../services'

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


		//return http.post('http://www.bredasweb.com.br:8080/syncmobile/api/cliente', data)

		store.commit('SET_MESSAGE_SUCCESS', false)
		store.commit('SET_MESSAGE_ERROR', false)

		return saveCustomer(data)

		.then((response) => {

			if(response.status < 300) {

				store.commit('SET_MESSAGE_SUCCESS', true)

			}

		})

		.catch((error) => {

			const erro = 'cpf invalido'

			store.commit('SET_MESSAGE_ERROR', true)

			store.commit('SET_ERRORS', erro)

		})

	},

	clearCustomerSelected(store) {

		store.commit('CLEAR_CUSTOMERS_SELECTED')

	}
}