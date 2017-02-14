import http from '../../../http'

import { saveCustomer } from '../services'

import { getCustomers } from '../services'

export default {


	getCustomers(store) {

		return getCustomers()

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


		store.commit('SET_MESSAGE_SUCCESS', false)
		store.commit('SET_MESSAGE_ERROR', false)

		return saveCustomer(data)

		.then((response) => {

			if(response.status < 300) {

				store.commit('SET_MESSAGE_SUCCESS', true)

			}

		})

		.catch((error) => {

			const erro = error.response.data.Errors[0].ErrorMessage

			store.commit('SET_MESSAGE_ERROR', true)

			store.commit('SET_ERRORS', erro)

		})

	},

	clearCustomerSelected(store) {

		store.commit('CLEAR_CUSTOMERS_SELECTED')

	}
}