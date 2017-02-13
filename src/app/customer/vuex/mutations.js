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

	'SET_RESULT_POST_CUSTOMER' (store, data) {

		if(data.status < 300) {

			//store.message.success = true

		} else {

			store.errors.push(data.Errors)

		}
	},

}