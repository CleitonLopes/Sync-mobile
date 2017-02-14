export default {

	'GET_CUSTOMERS' (store, data) {

		store.customers = data

	},

	'SELECTED_CUSTOMERS' (store, data) {

		store.selectedCustomer = data
	},

	'CLEAR_CUSTOMERS_SELECTED' (store) {

		store.selectedCustomer = ""
	},

	'SET_MESSAGE_SUCCESS' (store, data) {

		store.message.success = data
	},

	'SET_MESSAGE_ERROR' (store, data) {

		store.message.error = data
	},

	'SET_ERRORS' (store, data) {

		store.errors = data
	}

}